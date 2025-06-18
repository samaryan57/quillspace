import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { blogCreateSchema, blogUpdateSchema } from "@samaryan57/blog-common";
import { authMiddleware } from "../middleware/auth";

const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        authorId: string
    }
}>();

blogRouter.use("/*", authMiddleware);

blogRouter.post("/", async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const body = await c.req.json();
        const result = blogCreateSchema.safeParse(body);

        if (!result.success) {
            return c.json({
                message: "Invalid inputs",
                errors: result.error.flatten().fieldErrors
            }, 400);
        }

        const { title, content } = result.data;

        const blog = await prisma.post.create({
            data: {
                title,
                content,
                authorId: c.get("authorId")
            }
        });

        return c.json({
            message: "Blog created",
            id: blog.id
        });

    } catch (err) {
        console.error("Error while creating blog: ", err);
        return c.json({ message: "Internal server error" }, 500);
    }
});

blogRouter.put("/", async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());

        const body = await c.req.json();
        const result = blogUpdateSchema.safeParse(body);
        
        if (!result.success) {
            return c.json({
                message: "Invalid inputs",
                errors: result.error.flatten().fieldErrors
            }, 400);
        }

        const { title, content, id } = result.data;
        const authorId = c.get("authorId");

        // Check if post exists and belongs to user
        const existingPost = await prisma.post.findUnique({ where: { id } });

        if (!existingPost) {
            return c.json({ message: "Blog post not found" }, 404);
        }

        if (existingPost.authorId !== authorId) {
            return c.json({ message: "Unauthorized to update this post" }, 403);
        }

        const blog = await prisma.post.update({
            where: { id },
            data: {
                title,
                content
            }
        });

        return c.json({
            message: "Blog updated successfully",
            id
        });

    } catch (err) {
        console.error("Error while updating blog: ", err);
        return c.json({ message: "Internal server error" }, 500);
    }
});

// should ideally add pagination
blogRouter.get("/bulk", async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());

        const blogs = await prisma.post.findMany({
            select: {
                title: true,
                content: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });

        return c.json({
            message: "Blogs fetched",
            blogs
        });

    } catch (err) {
        console.error("Error while fetching blogs: ", err);
        return c.json({ message: "Internal server error" }, 500);
    }
});

blogRouter.get("/:id", async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());

        const id = c.req.param("id");

        if (!id) {
            return c.json({ message: "Missing blog ID" }, 400);
        }

        const blog = await prisma.post.findUnique({
            where: { id },
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });

        if (!blog) {
            return c.json({ message: "Couldn't find a blog with that ID" }, 404);
        }

        return c.json({
            message: "Post found!",
            blog
        });

    } catch (err) {
        console.error("Error while finding blog: ", err);
        return c.json({ message: "Internal server error" }, 500);
    }
});

export default blogRouter;

/*
{
    "title": "Second blog",
    "content": "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit.",
    "id": "21f40725-a491-4eeb-86eb-8786afc19fad"
}*/