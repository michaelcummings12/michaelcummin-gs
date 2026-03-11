import { z } from "zod";

export const contactFormSchema = z.object({
	name: z
		.string()
		.min(1, "Name is required.")
		.regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),
	email: z.email("Please enter a valid email."),
	message: z.string().min(1, "Please enter a message.")
});
