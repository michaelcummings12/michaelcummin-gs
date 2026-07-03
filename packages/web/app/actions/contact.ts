"use server";

import { resend } from "@web/lib/clients/resend";
import { CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } from "@web/lib/config";
import { actionClient } from "@web/lib/safeAction";
import { contactFormSchema } from "@web/lib/schemas/contact";

export const submitContactFormAction = actionClient.schema(contactFormSchema).action(async ({ parsedInput: { name, email, message } }) => {
	try {
		const { error } = await resend.emails.send({
			from: CONTACT_FROM_EMAIL,
			to: CONTACT_TO_EMAIL,
			replyTo: email,
			subject: `New message from ${name}`,
			text: `${message}\n\n---\nFrom: ${name} <${email}>`
		});

		if (error) {
			throw new Error(error.message);
		}

		return { success: true };
	} catch (error) {
		console.error("Error submitting contact form:", error);
		throw new Error("Failed to submit contact form");
	}
});
