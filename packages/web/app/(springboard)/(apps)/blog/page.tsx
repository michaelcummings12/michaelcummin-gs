import { Post } from "@web/components/Post";
import { getAllPosts } from "@web/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog | Michael Cummings",
	description: "Thoughts on software engineering, AI, web development, and building great products. Written by Michael Cummings, a full-stack engineer.",
	openGraph: {
		title: "Blog | Michael Cummings",
		description: "Thoughts on software engineering, AI, web development, and building great products.",
		type: "website"
	}
};

export default function BlogPage() {
	const allPosts = getAllPosts();
	const [featured, ...posts] = allPosts;
	return (
		<div className="min-h-full bg-zinc-900">
			<div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-16 md:py-20">
				<header className="mb-12">
					<h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Latest Posts</h1>
				</header>
				<Post post={featured} featured />
				{posts.length > 0 && (
					<div className="mb-12 grid gap-6 md:grid-cols-2">
						{posts.map((post) => (
							<Post key={post.slug} post={post} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}
