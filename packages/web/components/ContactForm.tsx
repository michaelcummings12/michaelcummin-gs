"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { submitContactFormAction } from "@web/app/actions/contact";
import { cn } from "@web/lib/cn";
import { contactFormSchema } from "@web/lib/schemas/contact";
import { FunctionComponent, useRef } from "react";
import Confetti from "react-confetti";
import { toast } from "sonner";
import { DefaultButton } from "./Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

const buttonBg = "bg-gradient-to-br from-sky-500 to-blue-700";

const ContactForm: FunctionComponent = () => {
	const formRef = useRef<HTMLDivElement>(null);
	const {
		form: {
			register,
			formState: { errors, isDirty }
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
	return (
		<div ref={formRef} className="relative z-10 h-full w-full overflow-hidden rounded px-4 py-6 md:px-10 md:py-12">
			<form onSubmit={handleSubmitWithAction} className="flex h-full flex-col justify-between md:h-auto md:gap-16">
				<div className="flex flex-col gap-4">
					<Input label="Name" {...register("name")} error={errors.name} disabled={isExecuting} />
					<Input label="Email" {...register("email")} type="email" error={errors.email} disabled={isExecuting} />
					<TextArea rows={8} label="Message" {...register("message")} error={errors.message} disabled={isExecuting} />
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
				{isSuccess && (
					<div className="absolute top-0 left-0 z-40 flex h-full w-full flex-col items-center justify-center gap-4 rounded bg-white/75 backdrop-blur-xl">
						<Confetti width={formRef.current?.scrollHeight} height={formRef.current?.scrollWidth} recycle={false} />
						<p className="text-2xl font-bold">Thank you for your message 🙂</p>
						<p className="text-lg font-light">I will get back to you shortly.</p>
					</div>
				)}
			</form>
		</div>
	);
};

export default ContactForm;
