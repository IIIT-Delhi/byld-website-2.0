// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const eventCollection = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        date: z.coerce.date(),
        image: z.string().optional(),
        link: z.string().optional(),
        description:z.string().optional(),
    }),
});

const hackathonCollection = defineCollection({
    type:'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        image: z.string().optional(),
        description: z.string().optional(),
        judges: z.array(z.string()).optional(),
        link: z.string().optional()
    })
})
const projectCollection = defineCollection({
    type:'content',
    schema: z.object({
        title:z.string(),
        contributors: z.array(z.string()),
        technlogies: z.array(z.string()),
        status: z.string()
    })
})
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'events': eventCollection,
  'hackathons':hackathonCollection,
  'projects':projectCollection,
};