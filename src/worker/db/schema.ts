import { z } from "zod";

export const idSchema = z.union([z.string().min(1), z.number()]).transform((value) => value);

export const createSlotSchema = z.object({
  planId: z.union([z.string().min(1), z.number()]),
  dayIndex: z.number().int().min(0).max(6),
  slotLabel: z.string().min(1),
});

export type CreateSlotInput = z.infer<typeof createSlotSchema>;
