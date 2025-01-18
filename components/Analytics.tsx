"use client";
import { isDev } from "@/utils/environment";
import { GoogleAnalytics } from "@next/third-parties/google";
import Tracker from "@openreplay/tracker";
import { FunctionComponent, useEffect, useRef } from "react";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!;
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
	return dev ? null : <GoogleAnalytics gaId={googleAnalyticsId} />;
};
