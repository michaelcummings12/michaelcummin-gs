import { getAllPosts } from "@web/lib/blog";
import { APP_URL } from "@web/lib/config";
import { allProjects } from "@web/lib/projects";
import { MetadataRoute } from "next";

const staticRoutes = ["/", "/about", "/blog", "/contact", "/projects", "/flappy-bird", "/privacy-policy", "/terms-of-use"];

export default function sitemap(): MetadataRoute.Sitemap {
	const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
		url: `${APP_URL}${path}`,
		changeFrequency: "monthly"
	}));
	const projectEntries: MetadataRoute.Sitemap = allProjects.map((project) => ({
		url: `${APP_URL}/projects/${project.id}`,
		changeFrequency: "monthly"
	}));
	const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
		url: `${APP_URL}/blog/${post.slug}`,
		lastModified: post.publishedAt,
		changeFrequency: "monthly"
	}));
	return [...staticEntries, ...projectEntries, ...blogEntries];
}
