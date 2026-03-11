import { BackButton } from "@web/components/BackButton";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy"
};

export default function PrivacyPolicyPage() {
	return (
		<main className="min-h-screen bg-black px-6 py-24 text-zinc-300 sm:py-32 lg:px-8">
			<BackButton />
			<div className="mx-auto max-w-3xl">
				<h1 className="font-heading mb-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">Privacy Policy</h1>
				<p className="mb-12 text-sm text-zinc-500">Last updated: March 2026</p>
				<div className="prose prose-invert prose-zinc max-w-none">
					<p>
						This Privacy Policy describes how information is collected, used, and protected when you visit
						<strong> https://www.michaelcummin.gs </strong>
						(the "Site"). Your privacy is important and this policy explains what data may be collected and how it is handled.
					</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">1. Information We Collect</h2>
					<p>This Site may collect limited information automatically when you access it. This may include:</p>
					<ul className="list-disc space-y-2 py-4 pl-6">
						<li>IP address</li>
						<li>browser type and version</li>
						<li>device type</li>
						<li>operating system</li>
						<li>referring URLs</li>
						<li>pages visited</li>
						<li>timestamps of visits</li>
					</ul>
					<p>This information is typically collected through server logs or analytics tools and is used to understand how the Site is accessed and used.</p>
					<p>The Site does not intentionally collect personally identifiable information unless you voluntarily provide it (for example, through direct communication).</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">2. Cookies and Tracking Technologies</h2>
					<p>This Site may use cookies or similar technologies to improve user experience, analyze traffic, and understand how visitors interact with the Site.</p>
					<p>A cookie is a small data file stored on your device that allows the Site to recognize repeat visits or maintain certain preferences.</p>
					<p>You can configure your browser to refuse cookies or notify you when cookies are being used. Disabling cookies may affect some functionality of the Site.</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">3. Analytics and Infrastructure Providers</h2>
					<p>The Site may rely on third-party infrastructure providers or analytics services to host the website and measure usage.</p>
					<p>
						These services may collect limited technical information such as IP addresses, browser information, or device identifiers as part of standard internet
						operations.
					</p>
					<p>These providers process data according to their own privacy policies and applicable data protection laws.</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">4. How Information Is Used</h2>
					<p>Any information collected may be used for purposes including:</p>
					<ul className="list-disc space-y-2 py-4 pl-6">
						<li>operating and maintaining the Site</li>
						<li>analyzing site traffic and usage patterns</li>
						<li>improving performance and user experience</li>
						<li>monitoring security and preventing abuse</li>
					</ul>
					<p>The Site does not sell, rent, or trade personal information.</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">5. Data Retention</h2>
					<p>Log and analytics data may be retained only for as long as necessary to maintain the security, operation, and performance of the Site.</p>
					<p>Data retention periods may vary depending on infrastructure providers or legal obligations.</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">6. Data Security</h2>
					<p>Reasonable technical and organizational safeguards are used to protect information from unauthorized access, disclosure, modification, or destruction.</p>
					<p>However, no method of transmission over the internet or method of electronic storage can be guaranteed to be completely secure.</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">7. External Links</h2>
					<p>
						This Site may contain links to external websites or services. These third-party sites operate independently and have their own privacy policies. We are not
						responsible for their content or practices.
					</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">8. Your Privacy Rights</h2>
					<p>
						Depending on your location, you may have certain rights regarding your personal data, including the right to request access, correction, or deletion of
						information that may be associated with you.
					</p>
					<p>Requests regarding personal data may be submitted through direct contact.</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">9. Automated Access and Data Collection</h2>
					<p>
						Automated scraping, crawling, or harvesting of data from this Site is prohibited except where explicitly permitted by applicable standards such as robots.txt.
					</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">10. Changes to This Policy</h2>
					<p>This Privacy Policy may be updated from time to time to reflect changes in legal requirements, infrastructure, or Site functionality.</p>
					<p>Updates will be posted on this page with a revised "Last updated" date.</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">11. Contact</h2>
					<p>If you have questions about this Privacy Policy or how information is handled, you may contact:</p>
					<a href="mailto:hello@michaelcummin.gs" className="text-blue-400 underline hover:text-blue-300">
						hello@michaelcummin.gs
					</a>
				</div>
			</div>
		</main>
	);
}
