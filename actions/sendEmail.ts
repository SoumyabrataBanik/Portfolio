"use server";

import ContactFormEmail from "@/emails/contact-form-emails";
import { getErrorMessage, validSenderDetails } from "@/lib/helpers";
import { ContactFormEmailProps } from "@/lib/types";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEYS);

export const sendEmail = async (formData: FormData) => {
	const senderEmail = formData?.get("senderEmail");
	const senderMessage = formData?.get("senderMessage");

	if (!validSenderDetails(senderEmail, "email")) {
		return {
			error: "Invalid Email may have been entered or Email is missing.",
		};
	}

	if (!validSenderDetails(senderMessage, "message")) {
		return {
			error: "Invalid message",
		};
	}

	let data;
	try {
		data = await resend.emails.send({
			from: "Contact form <onboarding@resend.dev>",
			to: "soumyabratabanik46@gmail.com",
			subject: `Message from ${senderEmail} via Portfolio contact form`,
			reply_to: senderEmail as string,
			// text: senderMessage as string,
			react: React.createElement(ContactFormEmail, {
				message: String(senderMessage),
				senderEmail: String(senderEmail),
			}),
		});
	} catch (error) {
		return {
			error: getErrorMessage(error),
		};
	}

	return {
		data,
	}
};
