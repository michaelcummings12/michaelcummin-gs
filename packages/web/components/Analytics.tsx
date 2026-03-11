"use client";
import { GoogleAnalytics } from "@next/third-parties/google";
import Tracker from "@openreplay/tracker";
import { GOOGLE_ANALYTICS_ID, isDevelopment, OPENREPLAY_PROJECT_KEY } from "@web/lib/config";
import { FunctionComponent, useEffect, useRef } from "react";

export const Analytics: FunctionComponent = () => {
	const tracker = useRef<Tracker | null>(null);
	useEffect(() => {
		// No need to enable analytics in development
		if (!isDevelopment) {
			if (!tracker.current) {
				tracker.current = new Tracker({
					projectKey: OPENREPLAY_PROJECT_KEY
				});
			}
			tracker.current?.start();
		}
	}, [isDevelopment]);
	return isDevelopment ? null : <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />;
};
