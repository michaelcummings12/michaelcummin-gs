"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { submitContactFormAction } from "@web/app/actions/contact";
import { cn } from "@web/lib/cn";
import { contactFormSchema } from "@web/lib/schemas/contact";
import { AnimatePresence, motion } from "framer-motion";
import { FunctionComponent, useEffect, useState } from "react";
import Confetti from "react-confetti";
import { toast } from "sonner";
import { DefaultButton } from "./Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

const buttonBg = "bg-[#0071e3] hover:bg-[#0077ed]";

const ContactForm: FunctionComponent = () => {
	const {
		form: {
			register,
			formState: { errors }
		},
		action: { isExecuting, status },
		handleSubmitWithAction
	} = useHookFormAction(submitContactFormAction, zodResolver(contactFormSchema), {
		actionProps: {
			onError: ({ error }) => {
				console.error(error);
				toast.error("An error occured while submitting your message. Please try again later.");
			}
		}
	});
	const isSuccess = status === "hasSucceeded";
	const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const update = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
		update();
		window.addEventListener("resize", update);
		return () => window.removeEventListener("resize", update);
	}, []);

	return (
		<div className="relative z-10 w-full">
			{isSuccess && (
				<Confetti width={windowSize.width} height={windowSize.height} recycle={false} style={{ position: "fixed", top: 0, left: 0, zIndex: 50, pointerEvents: "none" }} />
			)}
			<AnimatePresence mode="wait">
				{isSuccess ? (
					<motion.div
						key="success"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4 }}
						className="flex flex-col items-center justify-center gap-3 py-16 text-center">
						<p className="text-2xl font-semibold tracking-tight text-white">Thank you for your message 🙂</p>
						<p className="text-lg font-light text-white/60">I will get back to you shortly.</p>
					</motion.div>
				) : (
					<motion.form key="form" exit={{ opacity: 0 }} transition={{ duration: 0.4 }} onSubmit={handleSubmitWithAction} className="flex flex-col gap-4">
						<div className="flex flex-col gap-3">
							<Input label="Name" {...register("name")} error={errors.name} disabled={isExecuting} />
							<Input label="Email" {...register("email")} type="email" error={errors.email} disabled={isExecuting} />
							<TextArea rows={6} label="Message" {...register("message")} error={errors.message} disabled={isExecuting} />
						</div>
						<div className="flex flex-col gap-2">
							<DefaultButton
								loadingFill="bg-white"
								disabled={isExecuting || Object.keys(errors).length > 0}
								type="submit"
								className={cn(buttonBg, "w-full text-white focus:outline-black focus:outline-none")}
								isLoading={isExecuting}
								label="Submit"
								loadingBg={buttonBg}
							/>
						</div>
					</motion.form>
				)}
			</AnimatePresence>
		</div>
	);
};

export default ContactForm;
