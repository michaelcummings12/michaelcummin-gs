import ContactForm from "@web/components/ContactForm";
import { FadeInStagger, FadeInStaggerItem } from "@web/components/FadeIn";
import Social from "@web/components/Social";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
	description: "Get in touch with Michael Cummings with an idea, a question, or just a hello.",
	keywords: ["Contact", "Michael Cummings", "Get in touch", "Chicago", "Founder", "Builder"],
	alternates: {
		canonical: "/contact"
	},
	openGraph: {
		title: "Contact Michael Cummings",
		description: "Have an idea, a question, or just want to say hello?",
		url: "/contact"
	},
	twitter: {
		title: "Contact Michael Cummings",
		description: "Have an idea, a question, or just want to say hello?"
	}
};

export default function Page() {
	return (
		<div className="relative h-full w-full overflow-y-auto bg-black text-white">
			<FadeInStagger className="relative mx-auto flex min-h-svh w-full max-w-5xl flex-col justify-center gap-12 px-6 py-24 lg:flex-row lg:items-center lg:gap-20 lg:py-0">
				{/* Left - Info */}
				<div className="flex flex-col lg:flex-1">
					<FadeInStaggerItem>
						<h1 className="text-5xl font-semibold tracking-tight text-balance md:text-6xl">Say hello.</h1>
					</FadeInStaggerItem>
					<FadeInStaggerItem>
						<p className="mt-4 max-w-md text-lg leading-relaxed text-white/60">Have an idea, a question, or just want to say hello? I love making new friends {":)"}</p>
					</FadeInStaggerItem>
					<FadeInStaggerItem>
						<div className="mt-8">
							<Social />
						</div>
					</FadeInStaggerItem>
					<FadeInStaggerItem>
						<div className="mt-10 flex flex-col gap-3">
							<p className="text-sm font-medium text-white/40">Prefer to talk? Find a time.</p>
							<iframe
								src="https://www.nodro.com/embed/michael"
								style={{ width: "100%", maxWidth: "400px", height: "72px", borderRadius: "1.5rem", overflow: "hidden" }}
								title="Schedule with Nodro"
							/>
						</div>
					</FadeInStaggerItem>
				</div>

				{/* Right - Form */}
				<FadeInStaggerItem className="w-full lg:flex-1">
					<div className="w-full lg:ml-auto lg:max-w-md">
						<ContactForm />
					</div>
				</FadeInStaggerItem>
			</FadeInStagger>
		</div>
	);
}
