import { getAllPosts } from "@web/lib/blog";
import { APP_URL } from "@web/lib/config";
import { MetadataRoute } from "next";

const staticRoutes = [
	"/",
	"/about",
	"/blog",
	"/contact",
	"/projects",
	"/projects/breaking-entering",
	"/projects/chicago-care",
	"/projects/gcn",
	"/projects/house-calls",
	"/projects/nodro",
	"/projects/rhythm",
	"/flappy-bird",
	"/privacy-policy",
	"/terms-of-use"
];

export default function sitemap(): MetadataRoute.Sitemap {
	const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
		url: `${APP_URL}${path}`,
		changeFrequency: "monthly"
	}));
	const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
		url: `${APP_URL}/blog/${post.slug}`,
		lastModified: post.publishedAt,
		changeFrequency: "monthly"
	}));
	return [...staticEntries, ...blogEntries];
}
