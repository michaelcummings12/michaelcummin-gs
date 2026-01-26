import { CloseButton } from "@/components/CloseButton";
import ContactForm from "@/components/ContactForm";

export default function Page() {
	return (
		<div className="relative flex h-full w-full flex-col items-center justify-center bg-linear-to-br from-lime-500 to-green-700 px-2 py-2">
			<CloseButton />
			<div className="shadow-inset m-auto h-full w-full rounded-3xl bg-white/60 md:h-auto md:max-w-170">
				<ContactForm />
			</div>
		</div>
	);
}
