import ContactForm from "@web/components/ContactForm";
import Social from "@web/components/Social";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact | Michael Cummings - Full Stack Engineer",
	description:
		"Get in touch with Michael Cummings for freelance projects, job opportunities, or collaborations. Based in Chicago, available for remote work worldwide.",
	openGraph: {
		title: "Contact Michael Cummings",
		description: "Get in touch for freelance projects, job opportunities, or collaborations."
	}
};

export default function Page() {
	return (
		<div className="relative flex min-h-full w-full bg-zinc-900">
			<div className="flex w-full flex-col lg:flex-row">
				{/* Left side - Info */}
				<div className="flex flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-16 lg:py-0">
					<div className="mx-auto max-w-md">
						<h1 className="font-heading text-4xl font-bold text-white md:text-5xl">{"Let's work together"}</h1>
						<p className="mt-4 text-lg leading-relaxed text-zinc-400">
							{"Have a project in mind or want to discuss opportunities? I'm always open to new ideas and collaborations."}
						</p>

						{/* Social Links */}
						<div className="mt-10">
							<Social />
						</div>

						{/* Nodro Calendar */}
						<div className="mt-8">
							<iframe
								src="https://www.nodro.com/embed/cummingsdmichael"
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
							<h2 className="font-heading text-2xl font-bold text-zinc-900">Send a message</h2>
							<p className="mt-2 text-zinc-600">Fill out the form below and I'll get back to you within 24 hours.</p>
						</div>
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
}
