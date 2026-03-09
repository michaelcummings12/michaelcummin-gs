import { getAllPosts } from "@web/lib/blog";
import { prettyDate } from "@web/lib/prettyDate";
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

function PostImage({ src, description, className = "" }: { src?: string; description: string; className?: string }) {
	if (src) {
		return (
			/* eslint-disable-next-line @next/next/no-img-element */
			<img src={src} alt={description} className={`bg-zinc-800 object-cover ${className}`} />
		);
	}
	return (
		<div className={`flex items-center justify-center bg-zinc-800 ${className}`}>
			<p className="px-4 text-center text-xs text-zinc-500">{description}</p>
		</div>
	);
}

export default function BlogPage() {
	const allPosts = getAllPosts();
	const [hero, ...rest] = allPosts;
	const midPosts = rest.slice(0, 4);
	const bottomPosts = rest.slice(4);

	return (
		<div className="min-h-full bg-zinc-900">
			<div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
				{/* Header */}
				<header className="mb-12">
					<h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Latest Posts</h1>
				</header>

				{/* Hero Post */}
				{hero && (
					<Link href={`/blog/${hero.slug}`} className="group mb-12 block">
						<article className="grid gap-6 md:grid-cols-2 md:gap-8">
							<PostImage src={hero.heroImage} description={hero.imageDescription} className="aspect-4/3 w-full rounded-2xl" />
							<div className="flex flex-col justify-center">
								<p className="text-xs font-bold tracking-wider text-purple-500 uppercase">{hero.category}</p>
								<h2 className="mt-2 text-2xl font-bold text-white transition-colors group-hover:text-purple-500 md:text-3xl lg:text-4xl">{hero.title}</h2>
								<p className="mt-4 hidden text-base text-zinc-400 md:block">{hero.excerpt}</p>
								<time className="mt-4 flex items-center gap-1.5 text-sm text-zinc-500" dateTime={hero.publishedAt.toString()}>
									{prettyDate(hero.publishedAt)}
								</time>
							</div>
						</article>
					</Link>
				)}

				{/* Divider */}
				<hr className="mb-12 border-zinc-800" />

				{/* 2-Column Grid */}
				{midPosts.length > 0 && (
					<div className="mb-12 grid gap-x-8 gap-y-12 md:grid-cols-2">
						{midPosts.map((post) => (
							<Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
								<article>
									<PostImage src={post.heroImage} description={post.imageDescription} className="aspect-16/10 w-full rounded-xl" />
									<p className="mt-4 text-xs font-bold tracking-wider text-purple-500 uppercase">{post.category}</p>
									<h3 className="mt-1.5 text-lg font-bold text-white transition-colors group-hover:text-purple-500">{post.title}</h3>
									<p className="mt-4 hidden text-base text-zinc-400 md:block">{post.excerpt}</p>
									<time className="mt-4 block text-sm text-zinc-500" dateTime={post.publishedAt.toString()}>
										{prettyDate(post.publishedAt)}
									</time>
								</article>
							</Link>
						))}
					</div>
				)}

				{/* Divider */}
				{bottomPosts.length > 0 && <hr className="mb-12 border-zinc-800" />}

				{/* 3-Column Grid */}
				{bottomPosts.length > 0 && (
					<div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
						{bottomPosts.map((post) => (
							<Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
								<article>
									<PostImage src={post.heroImage} description={post.imageDescription} className="aspect-square w-full rounded-xl" />
									<p className="mt-4 text-xs font-bold tracking-wider text-purple-500 uppercase">{post.category}</p>
									<h3 className="mt-1.5 text-base font-bold text-white transition-colors group-hover:text-purple-500">{post.title}</h3>
									<time className="mt-2 block text-sm text-zinc-500" dateTime={post.publishedAt.toString()}>
										{prettyDate(post.publishedAt)}
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
