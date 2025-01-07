import { CloseButton } from "@/components/CloseButton";
import ContactForm from "@/components/ContactForm";

export default function Page() {
	return (
		<div className="h-full w-full px-2 py-2 relative bg-gradient-to-br from-fuchsia-500 to-purple-700 flex flex-col items-center justify-center">
			<CloseButton />
			<div className="bg-white/60 rounded-3xl md:max-w-[680px] w-full h-full md:h-auto shadow-inset m-auto">
				<ContactForm />
			</div>
		</div>
	);
}
