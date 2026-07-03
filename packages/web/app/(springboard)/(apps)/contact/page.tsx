import ContactForm from "@web/components/ContactForm";
import Social from "@web/components/Social";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
	description: "Get in touch with Michael Cummings. Whether it's an idea, a question, or just a hello, the inbox is open.",
	keywords: ["Contact", "Michael Cummings", "Get in touch", "Chicago", "Founder", "Builder"],
	openGraph: {
		title: "Contact Michael Cummings",
		description: "Have an idea, a question, or just want to say hello? The inbox is open.",
		url: "https://www.michaelcummin.gs/contact"
	},
	twitter: {
		title: "Contact Michael Cummings",
		description: "Have an idea, a question, or just want to say hello? The inbox is open."
	}
};

export default function Page() {
	return (
		<div className="relative flex min-h-full w-full bg-black">
			<div className="flex w-full flex-col lg:flex-row">
				{/* Left side - Info */}
				<div className="flex flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-16 lg:py-0">
					<div className="mx-auto max-w-md">
						<h1 className="text-4xl font-bold text-white md:text-5xl">Get in touch</h1>
						<p className="mt-4 text-lg leading-relaxed text-zinc-400">Have an idea, a question, or just want to say hello? My inbox is open.</p>

						{/* Social Links */}
						<div className="mt-10">
							<Social />
						</div>

						{/* Nodro Calendar */}
						<div className="mt-8">
							<iframe
								src="https://www.nodro.com/embed/michael"
								style={{ width: "100%", maxWidth: "400px", height: "72px", borderRadius: "1.5rem", overflow: "hidden" }}
								title="Schedule with Nodro"
							/>
						</div>
					</div>
				</div>

				{/* Right side - Form */}
				<div className="flex items-center justify-center p-6 lg:w-1/2 lg:p-12">
					<div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl">
						<div className="p-6 md:p-10">
							<h2 className="text-2xl font-bold text-zinc-900">Send a message</h2>
							<p className="mt-2 text-zinc-600">Fill out the form below and I&apos;ll get back to you within 24 hours.</p>
						</div>
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
}
