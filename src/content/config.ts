// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const hacknightCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    hosts: z.array(z.string().optional()),
    link: z.string().optional(),
    description: z.string().optional(),
    venue: z.string().optional(),
  }),
});

const techtalksCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    speaker: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    link: z.string().optional(),
    description: z.string().optional(),
  }),
});

const hackathonCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    description: z.string().optional(),
    judges: z.array(z.string()).optional(),
    link: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  hacknights: hacknightCollection,
  hackathons: hackathonCollection,
  techtalks: techtalksCollection,
};
