import { BackButton } from "@web/components/BackButton";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Use"
};

export default function TermsOfUsePage() {
	return (
		<main className="min-h-screen bg-black px-6 py-24 text-zinc-300 sm:py-32 lg:px-8">
			<BackButton />
			<div className="mx-auto max-w-3xl">
				<h1 className="font-heading mb-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">Terms of Use</h1>
				<p className="mb-12 text-sm text-zinc-500">Last updated: March 2026</p>
				<div className="prose prose-invert prose-zinc max-w-none">
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
					<p>
						By accessing or using this website located at https://www.michaelcummin.gs (the "Site"), you agree to be legally bound by these Terms of Use and all applicable
						laws and regulations. If you do not agree with any part of these terms, you are prohibited from using this Site.
					</p>
					<p>These Terms constitute a legally binding agreement between you and Michael Cummings ("Owner", "we", "us", or "our").</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">2. Intellectual Property Rights</h2>
					<p>All content, materials, and intellectual property on this Site, including but not limited to:</p>
					<ul className="list-disc space-y-2 py-4 pl-6">
						<li>source code</li>
						<li>design systems</li>
						<li>UI/UX layouts</li>
						<li>text and written content</li>
						<li>graphics and visual assets</li>
						<li>images and photography</li>
						<li>logos and branding</li>
						<li>animations and motion design</li>
						<li>projects and portfolio work</li>
						<li>software and technical implementations</li>
					</ul>
					<p>
						are the exclusive intellectual property of Michael Cummings unless otherwise stated and are protected under international copyright, trademark, trade dress, and
						intellectual property laws.
					</p>
					<p>No license or ownership rights are transferred to you through your use of the Site.</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">3. Restrictions on Use</h2>
					<p>You agree that you will not:</p>
					<ul className="list-disc space-y-2 py-4 pl-6">
						<li>copy, reproduce, republish, or distribute any materials from this Site</li>
						<li>use any content for commercial purposes without written permission</li>
						<li>modify, adapt, or create derivative works from the Site</li>
						<li>scrape, harvest, or extract data from the Site</li>
						<li>train machine learning or AI systems using any Site content</li>
						<li>mirror or replicate the Site on other servers or platforms</li>
						<li>reverse engineer or decompile any software or functionality</li>
						<li>remove copyright or proprietary notices</li>
						<li>use automated tools, bots, or scripts to access the Site</li>
						<li>attempt to bypass security or technical protections</li>
					</ul>
					<p>Unauthorized use of this Site or its materials may violate copyright, trademark, and other applicable laws and may result in legal action.</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">4. Limited License</h2>
					<p>You are granted a limited, non-exclusive, non-transferable, revocable license to access and view the Site solely for personal, non-commercial purposes.</p>
					<p>This license does not permit reproduction, redistribution, modification, or commercial use of any materials.</p>
					<p>This license may be terminated at any time at our sole discretion.</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">5. AI, Data Mining, and Automated Access</h2>
					<p>
						The use of this Site or its content for the purposes of training, developing, or improving machine learning models, artificial intelligence systems, large
						language models, or similar technologies is strictly prohibited without explicit written permission.
					</p>
					<p>Automated access including scraping, crawling, indexing, or data extraction using bots or scripts is prohibited unless explicitly permitted.</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">6. DMCA and Copyright Enforcement</h2>
					<p>
						Unauthorized use, reproduction, or redistribution of materials from this Site may result in enforcement actions including DMCA takedown notifications, removal
						requests, and legal proceedings.
					</p>
					<p>We actively monitor and enforce protection of our intellectual property rights.</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">7. Disclaimer</h2>
					<p>The materials on this Site are provided on an "as is" and "as available" basis without warranties of any kind, express or implied.</p>
					<p>Michael Cummings disclaims all warranties including, without limitation:</p>
					<ul className="list-disc space-y-2 py-4 pl-6">
						<li>merchantability</li>
						<li>fitness for a particular purpose</li>
						<li>non-infringement</li>
						<li>accuracy or reliability of information</li>
					</ul>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">8. Limitation of Liability</h2>
					<p>
						To the fullest extent permitted by law, Michael Cummings shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of your
						use or inability to use the Site.
					</p>
					<p>This includes but is not limited to damages for:</p>
					<ul className="list-disc space-y-2 py-4 pl-6">
						<li>loss of profits</li>
						<li>loss of data</li>
						<li>business interruption</li>
						<li>system failures</li>
					</ul>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">9. Indemnification</h2>
					<p>
						You agree to defend, indemnify, and hold harmless Michael Cummings from and against any claims, damages, liabilities, costs, or expenses arising from your misuse
						of the Site or violation of these Terms.
					</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">10. External Links</h2>
					<p>This Site may contain links to third-party websites. We are not responsible for the content, policies, or practices of any third-party sites.</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">11. Modifications to Terms</h2>
					<p>We reserve the right to modify these Terms at any time without prior notice. Continued use of the Site constitutes acceptance of the updated Terms.</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">12. Governing Law</h2>
					<p>These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.</p>
					<p>Any disputes arising from these Terms shall be resolved exclusively in the appropriate courts of competent jurisdiction.</p>
					<h2 className="font-heading mt-12 mb-6 text-2xl font-semibold text-white">13. Contact</h2>
					<p>If you have questions regarding these Terms, you may contact:</p>
					<p>Michael Cummings</p>
				</div>
			</div>
		</main>
	);
}
