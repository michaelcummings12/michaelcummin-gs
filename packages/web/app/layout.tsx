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
		title: "Michael Cummings — Independent Full-Stack Engineer & App Developer",
		description:
			"Independent full-stack engineer. I design, build, and ship production web and mobile apps for startups and growing businesses. Currently taking on a few new projects.",
		images: [{ url: "/meta_image.jpg", width: 1200, height: 630, type: "image/jpeg" }]
	},
	twitter: {
		card: "summary_large_image",
		title: "Michael Cummings — Independent Full-Stack Engineer & App Developer",
		description: "Independent full-stack engineer. I design, build, and ship production web and mobile apps for startups and growing businesses.",
		images: ["/meta_image.jpg"]
	},
	keywords: [
		"Michael Cummings",
		"freelance software engineer",
		"freelance full-stack engineer",
		"independent contractor",
		"freelance app developer",
		"freelance web developer",
		"React",
		"Next.js",
		"TypeScript",
		"AWS",
		"serverless",
		"Chicago",
		"remote"
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
		default: "Michael Cummings — Independent Full-Stack Engineer & App Developer"
	},
	description:
		"Michael Cummings is an independent full-stack software engineer who designs, builds, and ships production web and mobile apps for startups and growing businesses. Based in Chicago, working worldwide."
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
			<Analytics />
			<body id="body" className="bg-black font-sans">
				{children}
				<Toaster position="bottom-right" richColors theme="dark" />
			</body>
		</html>
	);
}
