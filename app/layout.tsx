import { Analytics } from "@/components/Analytics";
import { Overpass } from "next/font/google";
import "./globals.css";

export const metadata = {
	metadataBase: new URL("https://www.michaelcummin.gs"),
	openGraph: {
		locale: "en-US",
		images: [{ url: "/meta_image.jpg", width: 1200, height: 630, type: "image/jpeg" }]
	},
	robots: "all",
	referrer: "origin",
	themeColor: "#000000",
	colorScheme: "dark",
	viewport: {
		initialScale: 1,
		minimumScale: 1,
		maximumScale: 1,
		width: "device-width",
		height: "device-height"
	},
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
	title: "Michael Cummings",
	description: "Explore the work of Michael Cummings on his personal portfolio."
};

const overpass = Overpass({
	subsets: ["latin"]
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<Analytics />
			<body style={overpass.style} id="body" className="bg-black">
				{children}
			</body>
		</html>
	);
}
