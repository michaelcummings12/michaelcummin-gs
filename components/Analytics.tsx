"use client";
import { isDev } from "@/utils/environment";
import Tracker from "@openreplay/tracker/cjs";
import Script from "next/script";
import { FunctionComponent, useEffect, useRef } from "react";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
const openReplayProjectKey = process.env.NEXT_PUBLIC_OPENREPLAY_PROJECT_KEY;

export const Analytics: FunctionComponent = () => {
	const tracker = useRef<Tracker | null>(null);
	const dev = isDev();
	useEffect(() => {
		// No need to enable analytics in the dev environment
		if (!dev) {
			if (!tracker.current) {
				tracker.current = new Tracker({
					projectKey: openReplayProjectKey!
				});
			}
			tracker.current?.start();
		}
	}, [dev]);
	return dev ? null : (
		<>
			<Script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" />
			<Script id="google-analytics" strategy="afterInteractive">
				{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${googleAnalyticsId}', { page_path: window.location.pathname });
`}
			</Script>
		</>
	);
};
