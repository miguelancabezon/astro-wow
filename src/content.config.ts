import { defineCollection } from "astro:content";
import {  glob } from "astro/loaders";
import { z } from "astro/zod";

const books = defineCollection({
  loader: glob({
    base: "src/content/books",
    pattern: "*.md",
  }),
  schema: z.object({
        title: z.string(),
        author: z.string(),
        genre: z.string(),
        published: z.number(),
        rating: z.number().min(0).max(10),
        summary: z.string(),
    }),
});

export const collections = {
  books,
};