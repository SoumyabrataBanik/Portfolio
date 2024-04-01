"use client";

import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { sendEmail } from "@/actions/sendEmail";
import useSetIsActiveInView from "@/hooks/useSetIsActiveInView";
import SectionHeading from "./section-heading";
import Button from "./submit-button";

const Contact = () => {
	const { ref } = useSetIsActiveInView();

	async function formSubmitHandler(formData: FormData) {
		const { error } = await sendEmail(formData);

		if (error) {
			toast.error(error)
			return;
		} else {
			toast.success("Message sent successfully.")
		}
	}

	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			ref={ref}
			id="contact"
			className="mb-10 w-[min(100%, 45rem)] mx-3 sm:mx-0">
			<SectionHeading>Contact Me</SectionHeading>
			<p className="text-center text-slate-700 dark:text-slate-300">
				Please contact me directly from my email given above or use the
				below form.
			</p>

			<form
				className="mt-8 flex flex-col gap-8 items-center justify-center"
				action={formSubmitHandler}>
				<input
					name="senderEmail"
					required
					className="border-[1px] border-slate-800 rounded-md px-3 py-2 w-full hover:border-[1.5px] focus:border-[2px] focus:scale-[1.04] transition-all"
					type="email"
					placeholder="Enter your email"
				/>
				<textarea
					name="senderMessage"
					required
					maxLength={5000}
					className="border-[1px] border-slate-800 rounded-md px-3 py-2 w-full h-44 hover:border-[2px] focus:border-[2px] focus:scale-[1.04] transition-all"
					placeholder="Please write your message here"
				/>
				<Button />
			</form>
		</motion.section>
	);
};

export default Contact;
