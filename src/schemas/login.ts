import { z } from "zod";

export const login = z
	.object({
		email: z.string().email({ message: "validation.wrongEmail" }),
		password: z.string().min(8, { message: "validation.shortPassword" }),
		passwordConfirm: z.string(),
	})
	.refine((d) => d.password === d.passwordConfirm, {
		message: "validation.passwordMustMatch",
		path: ["passwordConfirm"],
	});
