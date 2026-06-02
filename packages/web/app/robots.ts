import { APP_URL } from "@web/lib/config";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/"
		},
		sitemap: `${APP_URL}/sitemap.xml`
	};
}
