"use client";
import { cn } from "@/lib/cn";
import { FunctionComponent, useRef, useState } from "react";
import Confetti from "react-confetti";
import { SubmitHandler, useForm } from "react-hook-form";
import { SubmitStates } from "../types/submitStates";
import { DefaultButton } from "./Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

interface IFormInput {
	name: string;
	email: string;
	message: string;
}

const submitFormToApi = async (data: any): Promise<boolean> => {
	const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
	if (res.status === 201) return true;
	return false;
};

const buttonBg = "bg-gradient-to-r from-fuchsia-500 to-purple-700";

const ContactForm: FunctionComponent = () => {
	const [submitState, setSubmitState] = useState<SubmitStates>(SubmitStates.UNKNOWN);
	const formRef = useRef<HTMLDivElement>(null);
	const {
		handleSubmit,
		register,
		formState: { errors, isDirty }
	} = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput, e) => {
		e?.preventDefault();
		setSubmitState(SubmitStates.PENDING);
		if (await submitFormToApi(data)) {
			return setSubmitState(SubmitStates.SUCCESS);
		} else {
			return setSubmitState(SubmitStates.FAILURE);
		}
	};
	return (
		<div ref={formRef} className="relative z-10 h-full w-full overflow-hidden rounded px-4 py-6 md:px-10 md:py-12">
			<form onSubmit={handleSubmit(onSubmit)} action="/api/contact_form" method="post" id="contact" className="flex h-full flex-col justify-between md:h-auto md:gap-16">
				<div className="flex flex-col gap-8">
					<Input
						label="Name"
						{...register("name", { required: "Name is required.", pattern: /^[a-zA-Z\s]*$/ })}
						error={errors.name}
						disabled={submitState === SubmitStates.PENDING}
					/>
					<Input
						label="Email"
						{...register("email", { required: "Email address is required.", pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
						type="email"
						error={errors.email}
						disabled={submitState === SubmitStates.PENDING}
					/>
					<TextArea
						rows={8}
						label="Message"
						{...register("message", { required: "Message is required." })}
						error={errors.message}
						disabled={submitState === SubmitStates.PENDING}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<DefaultButton
						loadingFill="bg-white"
						disabled={submitState === SubmitStates.PENDING || !isDirty || Object.keys(errors).length > 0}
						type="submit"
						className={cn(buttonBg, "w-full text-white focus:outline-black focus:outline-none")}
						isLoading={submitState == SubmitStates.PENDING}
						label="Submit"
						loadingBg={buttonBg}
					/>
				</div>
				{submitState === SubmitStates.SUCCESS && (
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
