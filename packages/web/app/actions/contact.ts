"use server";

import { prisma } from "@web/lib/prisma";
import { actionClient } from "@web/lib/safeAction";
import { contactFormSchema } from "@web/lib/schemas/contact";

export const submitContactFormAction = actionClient.schema(contactFormSchema).action(async ({ parsedInput: { name, email, message } }) => {
	try {
		await prisma.contactSubmission.create({
			data: {
				name,
				email,
				message
			}
		});
		return { success: true };
	} catch (error) {
		console.error("Error submitting contact form:", error);
		throw new Error("Failed to submit contact form");
	}
});
