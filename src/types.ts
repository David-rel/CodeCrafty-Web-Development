import { z } from "zod";

export const submissionInput = z
  .string({
    required_error: "Describe your submission",
  })
  .min(1)
  .max(50);
