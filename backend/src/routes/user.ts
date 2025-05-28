import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import * as bcrypt from 'bcryptjs';
import { sign } from "hono/jwt";
import { signinSchema, signupSchema } from "@samaryan57/blog-common";

const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();

userRouter.post("/signup", async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const body = await c.req.json();
        const result = signupSchema.safeParse(body);

        if (!result.success) {
            return c.json({
                message: "Invalid input",
                errors: result.error.flatten().fieldErrors
            }, 400);
        }

        const { email, name, password } = result.data;

        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return c.json({ message: "User already exists" }, 409);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name
            }
        });

        const token = await sign({ id: user.id }, c.env.JWT_SECRET);

        return c.json({
            message: "Signup successful!",
            token
        });

    } catch (err) {
        console.error("Signup error: ", err);
        return c.json({ message: "Internal server error" }, 500);
    }
});

userRouter.post("/signin", async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());

        const body = await c.req.json();
        const result = signinSchema.safeParse(body);

        if (!result.success) {
            return c.json({
                message: "Invalid inputs",
                errors: result.error.flatten().fieldErrors
            }, 400);
        }

        const { email, password } = result.data;

        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return c.json({ message: "User does not exist" }, 401);
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return c.json({ message: "Incorrect password" }, 403);
        }

        const token = await sign({ id: user.id }, c.env.JWT_SECRET);

        return c.json({
            message: "Signed in!",
            token
        });

    } catch (err) {
        console.error("Signin error: ", err);
        return c.json({ message: "Internal server error" }, 500);
    }
});

export default userRouter;