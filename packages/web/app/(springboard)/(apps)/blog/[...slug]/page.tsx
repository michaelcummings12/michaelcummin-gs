import { BackButton } from "@web/components/BackButton";
import { Badge } from "@web/components/Badge";
import { FadeInStagger, FadeInStaggerItem } from "@web/components/FadeIn";
import { Post } from "@web/components/Post";
import Social from "@web/components/Social";
import { YouTubeEmbed } from "@web/components/YouTubeEmbed";
import { getAllPosts, getPostBySlug } from "@web/lib/blog";
import { cn } from "@web/lib/cn";
import { prettyDate } from "@web/lib/prettyDate";
import { readingTime } from "@web/lib/readingTime";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";

type Props = {
	params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const {
		slug: [slug]
	} = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		return { title: "Post Not Found" };
	}

	return {
		title: `${post.title} | Michael Cummings`,
		description: post.excerpt,
		keywords: post.tags,
		openGraph: {
			title: post.title,
			description: post.excerpt,
			type: "article",
			publishedTime: post.publishedAt.toISOString(),
			tags: post.tags,
			images: [
				{
					url: post.heroImage,
					width: 1200,
					height: 630,
					alt: post.imageDescription
				}
			]
		},
		twitter: {
			title: post.title,
			description: post.excerpt,
			images: [post.heroImage]
		}
	};
}

export default async function BlogPostPage({ params }: Props) {
	const {
		slug: [slug]
	} = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		notFound();
	}

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Article",
		"headline": post.title,
		"description": post.excerpt,
		"image": `https://www.michaelcummin.gs${post.heroImage}`,
		"datePublished": post.publishedAt.toISOString(),
		"author": {
			"@type": "Person",
			"name": "Michael Cummings",
			"url": "https://www.michaelcummin.gs/"
		}
	};

	return (
		<div className="min-h-full bg-zinc-900">
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<BackButton />
			<FadeInStagger>
				<article>
					<FadeInStaggerItem>
						<header className="mx-auto max-w-3xl px-6 pt-20 pb-10">
							<Balancer as="h1" className="font-heading text-4xl leading-tight font-bold tracking-tight text-white md:text-6xl">
								{post.title}
							</Balancer>
							<p className="mt-6 text-xl leading-relaxed text-zinc-400">{post.excerpt}</p>
							<div className="mt-8 flex items-center gap-4">
								<div className="h-12 w-12 overflow-hidden rounded-full bg-zinc-800">
									<div className="flex h-full w-full items-center justify-center text-sm font-bold text-zinc-400">MC</div>
								</div>
								<div>
									<p className="text-sm font-medium text-white">Michael Cummings</p>
									<p className="text-sm text-zinc-500">
										{prettyDate(post.publishedAt)} &middot; {readingTime(post.content)}
									</p>
								</div>
							</div>
						</header>
					</FadeInStaggerItem>
					<FadeInStaggerItem>
						<div className="mx-auto max-w-5xl px-6">
							<div>
								<div className="aspect-video w-full overflow-hidden rounded-3xl bg-zinc-800">
									<Image
										src={post.heroImage}
										width={1200}
										height={630}
										alt={post.imageDescription}
										className="ease-default h-full w-full object-cover duration-400 hover:scale-105"
									/>
								</div>
								<figcaption className="p-2 text-slate-400">{post.imageDescription}</figcaption>
							</div>
						</div>
					</FadeInStaggerItem>
					<FadeInStaggerItem>
						<div className="mx-auto max-w-3xl px-6 pt-12 pb-16">
							<ReactMarkdown
								components={{
									h2: ({ node: _, ...props }: any) => <h2 className="font-heading mt-14 mb-4 text-2xl font-bold text-white" {...props} />,
									h3: ({ node: _, ...props }: any) => <h3 className="font-heading mt-10 mb-4 text-xl font-bold text-white" {...props} />,
									p: ({ node: _, ...props }: any) => <p className="my-5 text-lg leading-relaxed font-normal text-white" {...props} />,
									strong: ({ node: _, ...props }: any) => <strong className="font-bold" {...props} />,
									ul: ({ node: _, ...props }: any) => <ul className="my-5 ml-5 list-disc text-lg leading-relaxed font-normal text-white marker:text-white" {...props} />,
									ol: ({ node: _, ...props }: any) => <ol className="my-5 ml-5 list-decimal text-lg leading-relaxed font-normal text-white marker:text-white" {...props} />,
									li: ({ node: _, ...props }: any) => <li className="my-1.5" {...props} />,
									img: ({ node: _, alt, src, ...props }: any) => {
										if (alt === "youtube" && src) {
											return (
												<div className="my-8">
													<YouTubeEmbed videoId={src} />
												</div>
											);
										}
										return (
											<figure className="my-10">
												{/* eslint-disable-next-line @next/next/no-img-element */}
												<img alt={alt} src={src} className="w-full rounded-2xl bg-zinc-800 object-cover" {...props} />
												{alt && <figcaption className="mt-4 text-center text-sm text-zinc-500">{alt}</figcaption>}
											</figure>
										);
									},
									pre: ({ node: _, ...props }: any) => (
										<div className="-mx-6 my-8 md:-mx-12 lg:-mx-20">
											<pre className="overflow-x-auto rounded-xl bg-black p-6" {...props} />
										</div>
									),
									code: ({ node: _, className, ...props }: any) => (
										<code className={cn(className, "rounded bg-zinc-800 px-1 py-0.5 text-base leading-relaxed text-blue-500")} {...props} />
									),
									a: ({ node: _, className, ...props }: any) => <a className={`hover:underline ${className || ""}`} {...props} />
								}}>
								{post.content}
							</ReactMarkdown>
							{post.tags && post.tags.length > 0 && (
								<div className="mt-12 flex flex-wrap gap-2">
									{post.tags.map((tag) => (
										<Badge key={tag} color="default">
											{tag}
										</Badge>
									))}
								</div>
							)}
						</div>
					</FadeInStaggerItem>
					<div className="mx-auto max-w-3xl px-6">
						<hr className="border-zinc-800" />
					</div>
					<FadeInStaggerItem>
						<div className="mx-auto max-w-3xl px-6 py-12">
							<div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
								<div className="flex items-center gap-4">
									<div className="h-14 w-14 overflow-hidden rounded-full bg-zinc-800">
										<div className="flex h-full w-full items-center justify-center text-lg font-bold text-zinc-400">MC</div>
									</div>
									<div>
										<p className="font-semibold text-white">Michael Cummings</p>
									</div>
								</div>
								<Social />
							</div>
						</div>
					</FadeInStaggerItem>
					<div className="bg-zinc-950">
						<FadeInStagger className="mx-auto max-w-5xl px-6 py-16">
							<h2 className="font-heading mb-8 text-2xl font-bold text-white">You might also like</h2>
							<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
								{getAllPosts()
									.filter((p) => p.slug !== slug)
									.slice(0, 3)
									.map((post) => (
										<FadeInStaggerItem key={post.slug}>
											<Post post={post} />
										</FadeInStaggerItem>
									))}
							</div>
						</FadeInStagger>
					</div>
				</article>
			</FadeInStagger>
		</div>
	);
}
