import { FunctionComponent, useRef, useState } from "react";
import Confetti from "react-confetti";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { usePrivacyModal } from "../../contexts/PrivacyModalContext";
import { SubmitStates } from "../../types/submitStates";
import { DefaultButton } from "../Button";
import ErrorWrapper from "../ErrorWrapper";
import { LockIcon } from "../icons";
import Input from "../Input";
import TextArea from "../TextArea";

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

const ContactForm: FunctionComponent = () => {
	const { setPrivacyModalVisible } = usePrivacyModal();
	const [submitState, setSubmitState] = useState<SubmitStates>(SubmitStates.UNKNOWN);
	const formRef = useRef<HTMLDivElement>(null);

	const {
		control,
		handleSubmit,
		formState: { errors, isDirty }
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput, e) => {
		e?.preventDefault();
		setSubmitState(SubmitStates.PENDING);
		if (await submitFormToApi(data)) return setSubmitState(SubmitStates.SUCCESS);
		return setSubmitState(SubmitStates.FAILURE);
	};

	return (
		<div ref={formRef} className="py-6 px-4 md:py-12 md:px-10 rounded w-full h-full overflow-hidden relative z-10">
			<form onSubmit={handleSubmit(onSubmit)} action="/api/contact_form" method="post" id="contact" className="h-full md:h-auto flex flex-col md:gap-16 justify-between">
				<div className="flex flex-col gap-8">
					<ErrorWrapper error={errors.name} name="Name">
						<Controller
							name="name"
							control={control}
							rules={{ required: true, pattern: /^[a-zA-Z\s]*$/ }}
							render={({ field }) => (
								<Input name={field.name} value={field.value} onChange={field.onChange} innerRef={field.ref} disabled={submitState === SubmitStates.PENDING} error={errors.name ? true : false}>
									Name
								</Input>
							)}
						/>
					</ErrorWrapper>
					<ErrorWrapper error={errors.email} name="Email">
						<Controller
							name="email"
							control={control}
							rules={{ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i }}
							render={({ field }) => (
								<Input name={field.name} value={field.value} onChange={field.onChange} innerRef={field.ref} disabled={submitState === SubmitStates.PENDING} error={errors.email ? true : false} type="email">
									Email
								</Input>
							)}
						/>
					</ErrorWrapper>
					<ErrorWrapper error={errors.message} name="Message">
						<Controller
							name="message"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<TextArea name={field.name} rows={8} value={field.value} onChange={field.onChange} innerRef={field.ref} disabled={submitState === SubmitStates.PENDING} error={errors.message ? true : false}>
									Message
								</TextArea>
							)}
						/>
					</ErrorWrapper>
				</div>
				<div className="relative">{Object.keys(errors).length > 0 && <div className="font-semibold text-error border-2 border-error rounded p-4 w-full top-0 bg-white">Please correct the errors above. Then, try to re-submit your message.</div>}</div>
				<div className="flex flex-col gap-2">
					<DefaultButton
						loadingColor="bg-white"
						disabled={submitState === SubmitStates.PENDING || !isDirty || Object.keys(errors).length > 0}
						onClick={(e: any) => e.stopPropagation()}
						type="submit"
						className="w-full background-purple-gradient text-white focus:outline-black focus:outline-none"
						loading={submitState === SubmitStates.PENDING}>
						Submit
					</DefaultButton>
					<div className="flex flex-row gap-1 items-center">
						<LockIcon height="10px" className="fill-black" />
						<p className="text-sm font-light">
							Your data is protected under a{" "}
							<button className="underline hover:text-projects-gcn-500 cursor-pointer transition-colors" onClick={() => setPrivacyModalVisible(true)}>
								Privacy Notice
							</button>
							.
						</p>
					</div>
				</div>
				{submitState === SubmitStates.SUCCESS && (
					<div className="absolute top-0 left-0 w-full h-full bg-white/75 backdrop-blur-xl rounded z-50 flex justify-center items-center gap-4 flex-col">
						<Confetti width={formRef.current?.scrollHeight} height={formRef.current?.scrollWidth} recycle={false} />
						<p className="font-bold text-2xl">Thank you for your message 🙂</p>
						<p className="font-light text-lg">I will get back to you shortly.</p>
					</div>
				)}
			</form>
		</div>
	);
};

export default ContactForm;
