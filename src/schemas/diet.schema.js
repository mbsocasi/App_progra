import { z } from "zod";

export const createDietSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  caloriasDiarias: z.string({
    required_error: "Calorias is required",
  }),
  ingestaCalorias: z.string({
    required_error: "Ingest is required",
  }),
  pesoCorporal: z.string({
    required_error: "Peso is required",
  }),
  date: z.string().datetime().optional(),
});
