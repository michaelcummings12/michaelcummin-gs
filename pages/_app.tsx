import Tracker from "@openreplay/tracker/cjs";
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import React, { useEffect } from "react";
import { PrivacyModal } from "../src/components/PrivacyModal";
import { PrivacyModalProvider } from "../src/contexts/PrivacyModalContext";
import "../styles.css";

const openReplayProjectKey = process.env.NEXT_PUBLIC_OPENREPLAY_PROJECT_KEY;
const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

const tracker = new Tracker({
	projectKey: openReplayProjectKey!
});

function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		tracker.start();
	}, []);
	return (
		<>
			<Head>
				<link rel="icon" type="image/png" href="/favicon.png" />
				<meta name="title" content="Michael Cummings" />
				<meta name="description" content="Explore the work of Michael Cummings on his personal portfolio." />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover" />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://michaelcummin.gs/" />
				<meta property="og:title" content="Michael Cummings" />
				<meta property="og:description" content="Explore the work of Michael Cummings on his personal portfolio." />
				<meta property="og:image" content="/meta_image.png" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://michaelcummin.gs/" />
				<meta property="twitter:title" content="Michael Cummings" />
				<meta property="twitter:description" content="Explore the work of Michael Cummings on his personal portfolio." />
				<meta property="twitter:image" content="/meta_image.png" />
			</Head>
			<Script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" />
			<Script id="google-analytics" strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${googleAnalyticsId}', { page_path: window.location.pathname });
        `}
			</Script>
			<PrivacyModalProvider>
				<main>
					<Component {...pageProps} />
					<PrivacyModal />
				</main>
			</PrivacyModalProvider>
		</>
	);
}

export default App;
