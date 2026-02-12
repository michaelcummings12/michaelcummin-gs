import { getAllPosts } from "@web/lib/blog";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Blog | Michael Cummings",
	description: "Thoughts on software engineering, AI, web development, and building great products. Written by Michael Cummings, a full-stack engineer.",
	openGraph: {
		title: "Blog | Michael Cummings",
		description: "Thoughts on software engineering, AI, web development, and building great products.",
		type: "website"
	}
};

function formatDate(dateString: string) {
	const date = new Date(dateString);
	const now = new Date();
	const diffMs = now.getTime() - date.getTime();
	const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

	if (diffDays === 0) return "Today";
	if (diffDays === 1) return "Yesterday";
	if (diffDays < 7) return `${diffDays} days ago`;

	return date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric"
	});
}

function ImagePlaceholder({ description, className = "" }: { description: string; className?: string }) {
	return (
		<div className={`flex items-center justify-center bg-neutral-100 ${className}`}>
			<p className="px-4 text-center text-xs text-neutral-400">{description}</p>
		</div>
	);
}

export default function BlogPage() {
	const allPosts = getAllPosts();
	const [hero, ...rest] = allPosts;
	const midPosts = rest.slice(0, 4);
	const bottomPosts = rest.slice(4);

	return (
		<div className="min-h-full bg-white">
			<div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
				{/* Header */}
				<header className="mb-12">
					<h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">Latest Posts</h1>
				</header>

				{/* Hero Post */}
				{hero && (
					<Link href={`/blog/${hero.slug}`} className="group mb-12 block">
						<article className="grid gap-6 md:grid-cols-2 md:gap-8">
							<ImagePlaceholder description={hero.imageDescription} className="aspect-4/3 w-full rounded-2xl" />
							<div className="flex flex-col justify-center">
								<p className="text-xs font-bold tracking-wider text-neutral-500 uppercase">{hero.category}</p>
								<h2 className="mt-2 text-2xl font-bold text-neutral-900 transition-colors group-hover:text-neutral-600 md:text-3xl lg:text-4xl">{hero.title}</h2>
								<p className="mt-4 hidden text-base text-neutral-500 md:block">{hero.excerpt}</p>
								<time className="mt-4 flex items-center gap-1.5 text-sm text-neutral-400" dateTime={hero.publishedAt}>
									{formatDate(hero.publishedAt)}
								</time>
							</div>
						</article>
					</Link>
				)}

				{/* Divider */}
				<hr className="mb-12 border-neutral-200" />

				{/* 2-Column Grid */}
				{midPosts.length > 0 && (
					<div className="mb-12 grid gap-x-8 gap-y-12 md:grid-cols-2">
						{midPosts.map((post) => (
							<Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
								<article>
									<ImagePlaceholder description={post.imageDescription} className="aspect-16/10 w-full rounded-xl" />
									<p className="mt-4 text-xs font-bold tracking-wider text-neutral-500 uppercase">{post.category}</p>
									<h3 className="mt-1.5 text-lg font-bold text-neutral-900 transition-colors group-hover:text-neutral-600">{post.title}</h3>
									<time className="mt-2 block text-sm text-neutral-400" dateTime={post.publishedAt}>
										{formatDate(post.publishedAt)}
									</time>
								</article>
							</Link>
						))}
					</div>
				)}

				{/* Divider */}
				{bottomPosts.length > 0 && <hr className="mb-12 border-neutral-200" />}

				{/* 3-Column Grid */}
				{bottomPosts.length > 0 && (
					<div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
						{bottomPosts.map((post) => (
							<Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
								<article>
									<ImagePlaceholder description={post.imageDescription} className="aspect-square w-full rounded-xl" />
									<p className="mt-4 text-xs font-bold tracking-wider text-neutral-500 uppercase">{post.category}</p>
									<h3 className="mt-1.5 text-base font-bold text-neutral-900 transition-colors group-hover:text-neutral-600">{post.title}</h3>
									<time className="mt-2 block text-sm text-neutral-400" dateTime={post.publishedAt}>
										{formatDate(post.publishedAt)}
									</time>
								</article>
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
