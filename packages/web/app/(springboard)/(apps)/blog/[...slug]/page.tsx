import { BackButton } from "@web/components/BackButton";
import { Badge } from "@web/components/Badge";
import { CodeBlock } from "@web/components/CodeBlock";
import { FadeInStagger, FadeInStaggerItem } from "@web/components/FadeIn";
import { GitHubRepoCard } from "@web/components/GitHubRepoCard";
import { Post } from "@web/components/Post";
import Social from "@web/components/Social";
import { YouTubeEmbed } from "@web/components/YouTubeEmbed";
import { getAllPosts, getPostBySlug } from "@web/lib/blog";
import { cn } from "@web/lib/cn";
import { APP_URL } from "@web/lib/config";
import { parseGithubRepo } from "@web/lib/parseGithubRepo";
import { prettyDate } from "@web/lib/prettyDate";
import { readingTime } from "@web/lib/readingTime";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

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

	const image = `${APP_URL}${post.heroImage}`;
	const canonical = `${APP_URL}/blog/${slug}`;

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Article",
		"headline": post.title,
		"description": post.excerpt,
		"image": image,
		"datePublished": post.publishedAt.toISOString(),
		"author": {
			"@type": "Person",
			"name": "Michael Cummings",
			"url": APP_URL
		}
	};

	return {
		title: post.title,
		description: post.excerpt,
		keywords: post.tags,
		alternates: {
			canonical
		},
		openGraph: {
			title: post.title,
			description: post.excerpt,
			type: "article",
			url: canonical,
			publishedTime: post.publishedAt.toISOString(),
			tags: post.tags,
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: post.imageDescription
				}
			]
		},
		twitter: {
			title: post.title,
			description: post.excerpt,
			images: [image]
		},
		other: {
			"script:ld+json": JSON.stringify(jsonLd)
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
							<h1 className="font-heading text-4xl leading-tight font-bold tracking-tight text-balance text-white md:text-6xl">{post.title}</h1>
							<p className="mt-6 text-xl leading-relaxed text-zinc-400">{post.excerpt}</p>
							<div className="mt-8 flex items-center gap-4">
								<div className="h-12 w-12 overflow-hidden rounded-full bg-zinc-800">
									<Image src="/assets/portrait.jpg" alt="Michael Cummings" width={96} height={96} className="h-full w-full object-cover" />
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
									// eslint-disable-next-line @typescript-eslint/no-unused-vars
									h2: ({ node: _, ...rest }) => <h2 className="font-heading mt-14 mb-4 text-2xl font-bold text-white" {...rest} />,
									// eslint-disable-next-line @typescript-eslint/no-unused-vars
									h3: ({ node: _, ...rest }) => <h3 className="font-heading mt-10 mb-4 text-xl font-bold text-white" {...rest} />,
									// eslint-disable-next-line @typescript-eslint/no-unused-vars
									blockquote: ({ node: _, ...rest }) => (
										<blockquote className="my-8 rounded-r-xl border-l-4 border-blue-500/60 bg-blue-500/5 py-1 pr-5 pl-5 text-zinc-300 [&>p]:my-3" {...rest} />
									),
									p: ({ node, ...props }) => {
										const hasImage =
											node &&
											"children" in node &&
											Array.isArray(node.children) &&
											node.children.some((child) => child && typeof child === "object" && "tagName" in child && child.tagName === "img");
										if (hasImage) {
											return <div className="my-5 text-lg leading-relaxed font-normal text-white" {...props} />;
										}
										return <p className="my-5 text-lg leading-relaxed font-normal text-white" {...props} />;
									},
									// eslint-disable-next-line @typescript-eslint/no-unused-vars
									strong: ({ node: _, ...rest }) => <strong className="font-bold" {...rest} />,
									// eslint-disable-next-line @typescript-eslint/no-unused-vars
									ul: ({ node: _, ...rest }) => <ul className="my-5 ml-5 list-disc text-lg leading-relaxed font-normal text-white marker:text-white" {...rest} />,
									// eslint-disable-next-line @typescript-eslint/no-unused-vars
									ol: ({ node: _, ...rest }) => <ol className="my-5 ml-5 list-decimal text-lg leading-relaxed font-normal text-white marker:text-white" {...rest} />,
									// eslint-disable-next-line @typescript-eslint/no-unused-vars
									li: ({ node: _, ...rest }) => <li className="my-1.5" {...rest} />,
									// eslint-disable-next-line @typescript-eslint/no-unused-vars
									img: ({ node: _, alt, src, ...rest }) => {
										if (alt === "youtube" && src) {
											return (
												<div className="my-8">
													<YouTubeEmbed videoId={src as string} />
												</div>
											);
										}

										// Portrait screenshots (phone captures) — constrain width and center
										const isScreenshot = typeof alt === "string" && alt.startsWith("screenshot:");
										const displayAlt = isScreenshot ? (alt as string).replace("screenshot:", "").trim() : (alt as string) || "";

										return (
											<figure className={cn("my-10", isScreenshot && "flex flex-col items-center")}>
												<img alt={displayAlt} src={src as string} className={cn("rounded-2xl bg-zinc-800 object-cover", isScreenshot ? "w-full max-w-sm" : "w-full")} {...rest} />
												{displayAlt ? <figcaption className="mt-4 text-center text-sm text-zinc-500">{displayAlt}</figcaption> : null}
											</figure>
										);
									},
									// eslint-disable-next-line @typescript-eslint/no-unused-vars
									pre: ({ node: _, children }) => {
										// react-markdown wraps fenced code in <pre><code>
										// Grab the first React element child (the rendered <code>)
										const child = Array.isArray(children) ? children[0] : children;

										if (child && typeof child === "object" && "props" in child) {
											const { className, children: codeChildren } = (child as React.ReactElement<{ className?: string; children?: React.ReactNode }>)
												.props;
											const match = /language-(\w+)/.exec(className || "");
											const language = match ? match[1] : "text";
											const codeString = String(codeChildren).replace(/\n$/, "");

											return (
												<div className="-mx-6 my-8 md:-mx-12 lg:-mx-20">
													<CodeBlock language={language}>{codeString}</CodeBlock>
												</div>
											);
										}

										// Fallback for pre blocks without a recognizable code child
										return (
											<div className="-mx-6 my-8 md:-mx-12 lg:-mx-20">
												<pre className="overflow-x-auto rounded-xl bg-[#1e1e1e] p-6 text-sm text-[#d4d4d4]">{children}</pre>
											</div>
										);
									},
									// eslint-disable-next-line @typescript-eslint/no-unused-vars
									code: ({ node: _, className, children, ...rest }) => {
										// Only style inline code — fenced code blocks are handled by the `pre` renderer above
										const isInline = !className || !className.includes("language-");
										if (isInline) {
											return (
												<code className="rounded bg-zinc-800 px-1.5 py-0.5 text-[0.9em] leading-relaxed text-blue-400" {...rest}>
													{children}
												</code>
											);
										}
										// Fenced code blocks: render raw children so the parent <pre> can extract them
										return (
											<code className={className} {...rest}>
												{children}
											</code>
										);
									},
									// eslint-disable-next-line @typescript-eslint/no-unused-vars
									a: ({ node: _, href, children, ...rest }) => {
										const githubRepo = href ? parseGithubRepo(href) : null;
										if (githubRepo && href) {
											return <GitHubRepoCard owner={githubRepo.owner} repo={githubRepo.repo} href={href} />;
										}

										return (
											<a
												href={href}
												className="text-blue-400 underline decoration-blue-400/30 underline-offset-2 transition-colors duration-200 hover:text-blue-300 hover:decoration-blue-300/60"
												target={href?.startsWith("http") ? "_blank" : undefined}
												rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
												{...rest}>
												{children}
											</a>
										);
									}
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
										<Image src="/assets/portrait.jpg" alt="Michael Cummings" width={112} height={112} className="h-full w-full object-cover" />
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
