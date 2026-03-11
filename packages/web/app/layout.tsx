import { Analytics } from "@web/components/Analytics";
import { Metadata, Viewport } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.michaelcummin.gs"),
	openGraph: {
		type: "website",
		locale: "en-US",
		siteName: "Michael Cummings",
		images: [{ url: "/meta_image.jpg", width: 1200, height: 630, type: "image/jpeg" }]
	},
	twitter: {
		card: "summary_large_image",
		title: "Michael Cummings",
		description: "Explore the work of Michael Cummings on his personal portfolio.",
		images: ["/meta_image.jpg"]
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
		default: "Michael Cummings"
	},
	description: "Explore the work of Michael Cummings on his personal portfolio."
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

const overpass = Overpass({
	subsets: ["latin"],
	variable: "--font-overpass",
	display: "swap"
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={overpass.variable}>
			<Analytics />
			<body id="body" className="bg-black font-sans">
				{children}
				<Toaster position="bottom-right" richColors theme="dark" />
			</body>
		</html>
	);
}
