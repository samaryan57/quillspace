import { z } from "zod";

export const blogCreateSchema = z.object({
    title: z.string().min(1),
    content: z.string().min(1)
});

export const blogUpdateSchema = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    id: z.string()
});

export type BlogCreateInput = z.infer<typeof blogCreateSchema>
export type BlogUpdateInput = z.infer<typeof blogUpdateSchema>