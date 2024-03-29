import { FunctionComponent } from "react";
import { usePrivacyModal } from "../contexts/PrivacyModalContext";
import Modal from "./Modal";

export const PrivacyModal: FunctionComponent = () => {
	const { isPrivacyModalVisible, setPrivacyModalVisible } = usePrivacyModal();

	return (
		<Modal setActive={() => setPrivacyModalVisible(false)} isActive={isPrivacyModalVisible}>
			<div className="h-full w-full flex flex-col gap-4 px-2">
				<h1 className="text-2xl font-bold">Privacy Notice</h1>
				<p>
					Your privacy is important to us. It is our policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website, https://michaelcummin.gs, and
					other sites we own and operate.
				</p>
				<p>This policy is effective as of January 1, 2022 and was last updated on April 23, 2022.</p>
				<h2 className="text-lg font-semibold">Information We Collect</h2>
				<p>
					Information we collect includes both information you knowingly and actively provide us when using or participating in any of our services and promotions, and any information automatically sent by your devices in the course of accessing our
					products and services.
				</p>
				<h2 className="text-lg font-semibold">Log Data</h2>
				<p>
					When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of
					your visit, the time spent on each page, other details about your visit, and technical details that occur in conjunction with any errors you may encounter.
				</p>
				<p>Please be aware that while this information may not be personally identifying by itself, it may be possible to combine it with other data to personally identify individual persons.</p>
				<h2 className="text-lg font-semibold">Personal Information</h2>
				<p>We may ask for personal information which may include one or more of the following:</p>
				<ol className="list-disc pl-8">
					<li>Name</li>
					<li>Email</li>
				</ol>
				<h2 className="text-lg font-semibold">Legitimate Reasons for Processing Your Personal Information</h2>
				<p>We only collect and use your personal information when we have a legitimate reason for doing so. In which instance, we only collect personal information that is reasonably necessary to provide our services to you.</p>
				<h2 className="text-lg font-semibold">Collection and Use of Information</h2>
				<p>We may collect personal information from you when you do any of the following on our website:</p>
				<ol className="list-disc pl-8">
					<li>Use a mobile device or web browser to access our content</li>
					<li>Contact us via email, social media, or on any similar technologies</li>
				</ol>
				<p>We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes:</p>
				<p>We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes:</p>
				<ol className="list-disc pl-8">
					<li>to contact and communicate with you</li>
					<li>for analytics, market research, and business development, including to operate and improve our website and associated applications</li>
					<li>for security and fraud prevention, and to ensure that our sites and apps are safe, secure, and used in line with our terms of use</li>
				</ol>
				<h2 className="text-lg font-semibold">Security of Your Personal Information</h2>
				<p>
					When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.
				</p>
				<h2 className="text-lg font-semibold">How Long We Keep Your Personal Information</h2>
				<p>
					We keep your personal information only for as long as we need to. This time period may depend on what we are using your information for, in accordance with this privacy policy. If your personal information is no longer required, we will delete
					it or make it anonymous by removing all details that identify you.
				</p>
				<p>
					However, if necessary, we may retain your personal information for our compliance with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, scientific, or historical research purposes, or statistical
					purposes.
				</p>
				<h2 className="text-lg font-semibold">Children’s Privacy</h2>
				<p>We do not aim any of our products or services directly at children under the age of 13, and we do not knowingly collect personal information about children under 13.</p>
				<h2 className="text-lg font-semibold">Your Rights and Controlling Your Personal Information</h2>
				<p>
					You always retain the right to withhold personal information from us, with the understanding that your experience of our website may be affected. We will not discriminate against you for exercising any of your rights over your personal
					information. If you do provide us with personal information you understand that we will collect, hold, use and disclose it in accordance with this privacy policy. You retain the right to request details of any personal information we hold about
					you.
				</p>
				<p>
					If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any
					information found to be inaccurate, incomplete, misleading, or out of date.
				</p>
				<p>
					If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and
					respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint.
				</p>
				<h2 className="text-lg font-semibold">Use of Cookies</h2>
				<p>
					We use “cookies” to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This
					helps us serve you content based on the preferences you have specified.
				</p>
				<h2 className="text-lg font-semibold">Limits of Our Policy</h2>
				<p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.</p>
				<h2 className="text-lg font-semibold">Changes to This Policy</h2>
				<p>
					At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here at
					the same link by which you are accessing this privacy policy.
				</p>
				<p>If required by law, we will get your permission or give you the opportunity to opt in to or opt-out of, as applicable, any new uses of your personal information.</p>
				<h2 className="text-lg font-semibold">Contact Us</h2>
				<p>For any questions or concerns regarding your privacy, you may contact us using the following details:</p>
				<p>
					<a href="mailto:hello@michaelcummings" className="underline hover:text-projects-gcn-500 transition-colors">
						hello@michaelcummin.gs
					</a>
				</p>
			</div>
		</Modal>
	);
};
