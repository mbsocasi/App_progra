import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  series: z.string({
    required_error: "Series is required",
  }),
  repeticiones: z.string({
    required_error: "Repeticiones is required",
  }),
  peso: z.string({
    required_error: "Peso is required",
  }),
  description: z.string().optional(),
  date: z.string().datetime().optional(),
});
