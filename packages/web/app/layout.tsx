import { Analytics } from "@web/components/Analytics";
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://michaelcummin.gs"),
	openGraph: {
		type: "website",
		locale: "en-US",
		siteName: "Michael Cummings",
		url: "/",
		title: "Michael Cummings, Founder & Full-Stack Engineer",
		description: "Founder and full-stack engineer. I start companies and ship the products myself.",
		images: [{ url: "/meta_image.jpg", width: 1200, height: 630, type: "image/jpeg" }]
	},
	twitter: {
		card: "summary_large_image",
		title: "Michael Cummings, Founder & Full-Stack Engineer",
		description: "Founder and full-stack engineer. I start companies and ship the products myself.",
		images: ["/meta_image.jpg"]
	},
	keywords: [
		"Michael Cummings",
		"founder",
		"builder",
		"startup founder",
		"full-stack engineer",
		"software engineer",
		"app developer",
		"React",
		"Next.js",
		"TypeScript",
		"AWS",
		"serverless",
		"Chicago",
		"Los Angeles"
	],
	alternates: {
		canonical: "/"
	},
	robots: "all",
	referrer: "origin",
	authors: [{ name: "Michael Cummings" }],
	creator: "Michael Cummings",
	icons: [
		{
			type: "image/png",
			sizes: "32x32",
			url: "/favicon-32.png"
		},
		{
			type: "image/png",
			sizes: "128x128",
			url: "/favicon-128.png"
		},
		{
			type: "image/png",
			sizes: "180x180",
			url: "/favicon-180.png"
		},
		{
			type: "image/png",
			sizes: "192x192",
			url: "/favicon-192.png"
		}
	],
	title: {
		template: "%s | Michael Cummings",
		default: "Michael Cummings, Founder & Full-Stack Engineer"
	},
	description: "Michael Cummings is a founder and full-stack engineer who starts companies and ships the products himself."
};

export const viewport: Viewport = {
	initialScale: 1,
	minimumScale: 1,
	maximumScale: 1,
	width: "device-width",
	height: "device-height",
	colorScheme: "dark",
	themeColor: "#000000"
};

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap"
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={inter.variable}>
			<body id="body" className="bg-black font-sans">
				{children}
				<Toaster position="bottom-right" richColors theme="dark" />
				<Analytics />
			</body>
		</html>
	);
}
