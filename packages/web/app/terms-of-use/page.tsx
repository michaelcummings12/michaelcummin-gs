import { BackButton } from "@web/components/BackButton";
import { Metadata } from "next";
export const metadata: Metadata = { title: "Terms of Use" };
export default function TermsOfUsePage() {
	return (
		<main className="min-h-screen bg-black px-6 py-24 text-zinc-300 sm:py-32 lg:px-8">
			<BackButton />
			<div className="mx-auto max-w-3xl">
				<h1 className="font-heading mb-4 text-4xl font-bold tracking-tight text-white sm:text-6xl"> Terms of Use </h1>
				<p className="mb-12 text-sm text-zinc-500"> Last updated: March 2026 </p>
				<div className="prose prose-invert prose-zinc max-w-none">
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white"> 1. Acceptance of Terms </h2>
					<p>
						By accessing or using the website located at https://www.michaelcummin.gs (the "Site"), you agree to be bound by these Terms of Use and all applicable laws and
						regulations. If you do not agree with any part of these Terms, you must not use this Site.
					</p>
					<p> These Terms constitute a legally binding agreement between you and Michael Cummings ("Owner", "we", "us", or "our"). </p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white"> 2. Intellectual Property Rights </h2>
					<p> All content, materials, and intellectual property displayed on this Site, including but not limited to: </p>
					<ul className="list-disc space-y-2 py-4 pl-6">
						<li>source code</li> <li>design systems</li> <li>UI/UX layouts</li> <li>written content and documentation</li> <li>graphics and visual assets</li>
						<li>images and photography</li> <li>logos and branding</li> <li>animations and motion design</li> <li>projects and portfolio work</li>
						<li>software and technical implementations</li>
					</ul>
					<p>
						are the intellectual property of Michael Cummings or their respective owners and are protected under applicable copyright, trademark, trade dress, and
						intellectual property laws.
					</p>
					<p> No license or ownership rights are transferred to you through your use of this Site. </p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white"> 3. Portfolio Work and Client Materials </h2>
					<p>
						Certain projects, designs, branding, screenshots, or materials displayed on this Site may represent work created for clients, employers, or partner
						organizations.
					</p>
					<p> Ownership of those materials remains with their respective copyright holders. </p>
					<p>
						Such materials are displayed solely for the purpose of demonstrating professional experience and portfolio history. No rights or licenses to those materials are
						granted through this Site.
					</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white"> 4. Restrictions on Use </h2> <p>You agree that you will not:</p>
					<ul className="list-disc space-y-2 py-4 pl-6">
						<li> copy, reproduce, republish, or distribute any materials from this Site, including materials owned by third parties </li>
						<li> use any content from the Site for commercial purposes without written permission </li>
						<li> modify, adapt, or create derivative works based on the Site or its content </li>
						<li> create templates, themes, starter kits, or other distributable products derived from this Site </li>
						<li> scrape, harvest, or extract data from the Site </li> <li> use Site content to train machine learning or artificial intelligence systems </li>
						<li> mirror or replicate the Site on other servers or platforms </li> <li> reverse engineer or decompile any software contained on the Site </li>
						<li> remove copyright or proprietary notices </li> <li> use automated tools, bots, or scripts to access the Site </li>
						<li> attempt to bypass security or technical protections </li>
					</ul>
					<p> Unauthorized use of this Site or its materials may violate copyright, trademark, and other laws and may result in legal action. </p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white"> 5. Limited License </h2>
					<p>
						You are granted a limited, non-exclusive, non-transferable, and revocable license to access and view the Site solely for personal and non-commercial purposes.
					</p>
					<p> This license does not permit reproduction, redistribution, modification, or commercial use of any materials. </p>
					<p> This license may be terminated at any time at our sole discretion. </p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white"> 6. AI, Data Mining, and Automated Access </h2>
					<p>
						The use of this Site or its content for the purposes of training, developing, or improving machine learning models, artificial intelligence systems, large
						language models, or similar technologies is strictly prohibited without explicit written permission.
					</p>
					<p>
						Automated scraping, crawling, indexing, or harvesting of data from the Site is prohibited unless explicitly permitted by applicable standards such as robots.txt.
					</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white"> 7. DMCA and Copyright Enforcement </h2>
					<p>
						Unauthorized use, reproduction, or redistribution of materials from this Site may result in enforcement actions including DMCA takedown notifications, removal
						requests, or legal proceedings.
					</p>
					<p> We actively monitor and enforce protection of our intellectual property rights. </p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white"> 8. Disclaimer </h2>
					<p> The materials on this Site are provided on an "as is" and "as available" basis without warranties of any kind, express or implied. </p>
					<p> Michael Cummings disclaims all warranties including, without limitation: </p>
					<ul className="list-disc space-y-2 py-4 pl-6">
						<li>merchantability</li> <li>fitness for a particular purpose</li> <li>non-infringement</li> <li>accuracy or reliability of information</li>
					</ul>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white"> 9. Limitation of Liability </h2>
					<p>
						To the fullest extent permitted by law, Michael Cummings shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of your
						use or inability to use the Site.
					</p>
					<p>This includes but is not limited to damages for:</p>
					<ul className="list-disc space-y-2 py-4 pl-6">
						<li>loss of profits</li> <li>loss of data</li> <li>business interruption</li> <li>system failures</li>
					</ul>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white"> 10. Indemnification </h2>
					<p>
						You agree to defend, indemnify, and hold harmless Michael Cummings from and against any claims, damages, liabilities, costs, or expenses arising from your misuse
						of the Site or violation of these Terms.
					</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white"> 11. External Links </h2>
					<p> This Site may contain links to third-party websites. We are not responsible for the content, policies, or practices of those sites. </p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white"> 12. Modifications to Terms </h2>
					<p> We reserve the right to modify these Terms at any time without prior notice. Continued use of the Site constitutes acceptance of the updated Terms. </p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white"> 13. Governing Law </h2>
					<p> These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions. </p>
					<p> Any disputes arising from these Terms shall be resolved exclusively in the appropriate courts of competent jurisdiction. </p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">14. Contact</h2>
					<p>If you have questions regarding these Terms, you may contact:</p>
					<p>
						<a href="mailto:hello@michaelcummin.gs" className="text-blue-400 underline hover:text-blue-300">
							hello@michaelcummin.gs
						</a>
					</p>
				</div>
			</div>
		</main>
	);
}
