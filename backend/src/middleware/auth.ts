import { MiddlewareHandler } from "hono";
import { verify } from "hono/jwt";

type Env = {
    Bindings: {
        JWT_SECRET: string
    },
    Variables: {
        authorId: string
    }
}

export const authMiddleware: MiddlewareHandler<Env> = async (c, next) => {
    const authHeader = c.req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return c.json({ message: "Invalid authorization token" }, 411);
    }

    try {
        const token = authHeader.split(" ")[1];

        const user = await verify(token, c.env.JWT_SECRET) as { id: string };

        c.set("authorId", user.id);

        await next();

    } catch (err) {
        console.error("JWT Verification failed: ", err);
        return c.json({ message: "Unauthorized" }, 401);
    }
}