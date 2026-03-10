import { BackButton } from "@web/components/BackButton";
import { FadeInStagger, FadeInStaggerItem } from "@web/components/FadeIn";
import { Post } from "@web/components/Post";
import Social from "@web/components/Social";
import { getAllPosts, getPostBySlug } from "@web/lib/blog";
import { prettyDate } from "@web/lib/prettyDate";
import { readingTime } from "@web/utils/readingTime";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";

interface Props {
	params: {
		slug: string[];
	};
}

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
		openGraph: {
			title: post.title,
			description: post.excerpt,
			type: "article",
			publishedTime: post.publishedAt.toString(),
			authors: ["Michael Cummings"],
			tags: post.tags
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.excerpt
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

	return (
		<div className="min-h-full bg-zinc-900">
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
									img: ({ node: _, alt, ...props }: any) => (
										<figure className="my-10">
											{/* eslint-disable-next-line @next/next/no-img-element */}
											<img alt={alt} className="w-full rounded-2xl bg-zinc-800 object-cover" {...props} />
											{alt && <figcaption className="mt-4 text-center text-sm text-zinc-500">{alt}</figcaption>}
										</figure>
									),
									pre: ({ node: _, ...props }: any) => (
										<div className="-mx-6 my-8 md:-mx-12 lg:-mx-20">
											<pre className="overflow-x-auto rounded-xl bg-black p-6" {...props} />
										</div>
									),
									code: ({ node: _, className, ...props }: any) => <code className={`text-sm leading-relaxed text-zinc-300 ${className || ""}`} {...props} />
								}}>
								{post.content}
							</ReactMarkdown>
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
