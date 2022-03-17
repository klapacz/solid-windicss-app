import { z } from "zod";

export const login = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    passwordConfirm: z.string(),
  })
  .refine((d) => d.password === d.passwordConfirm, {
    message: "password must match",
    path: ["passwordConfirm"],
  });
