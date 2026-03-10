import { BackButton } from "@web/components/BackButton";
import Social from "@web/components/Social";
import { getAllPosts, getPostBySlug } from "@web/lib/blog";
import { prettyDate } from "@web/lib/prettyDate";
import { readingTime } from "@web/utils/readingTime";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

function renderContent(content: string) {
	const lines = content.split("\n");
	const elements: React.ReactNode[] = [];
	let inCodeBlock = false;
	let codeLines: string[] = [];
	let codeKey = 0;

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const trimmed = line.trim();

		if (!trimmed && !inCodeBlock) continue;

		// Code block toggle
		if (trimmed.startsWith("```")) {
			if (inCodeBlock) {
				elements.push(
					<div key={`code-${codeKey++}`} className="-mx-6 my-8 md:-mx-12 lg:-mx-20">
						<pre className="overflow-x-auto rounded-xl bg-black p-6">
							<code className="text-sm leading-relaxed text-zinc-300">{codeLines.join("\n")}</code>
						</pre>
					</div>
				);
				codeLines = [];
				inCodeBlock = false;
			} else {
				inCodeBlock = true;
			}
			continue;
		}

		if (inCodeBlock) {
			codeLines.push(line);
			continue;
		}

		// Images
		if (trimmed.startsWith("![") && trimmed.includes("](") && trimmed.endsWith(")")) {
			const altMatch = trimmed.match(/!\[(.*?)\]/);
			const urlMatch = trimmed.match(/\]\((.*?)\)/);
			if (altMatch && urlMatch) {
				elements.push(
					<figure key={i} className="my-10">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={urlMatch[1]} alt={altMatch[1]} className="w-full rounded-2xl bg-zinc-800 object-cover" />
						{altMatch[1] && <figcaption className="mt-4 text-center text-sm text-zinc-500">{altMatch[1]}</figcaption>}
					</figure>
				);
				continue;
			}
		}

		// Headings
		if (trimmed.startsWith("### ")) {
			elements.push(
				<h3 key={i} className="mt-10 mb-4 text-xl font-bold text-white">
					{trimmed.replace("### ", "")}
				</h3>
			);
			continue;
		}
		if (trimmed.startsWith("## ")) {
			elements.push(
				<h2 key={i} className="mt-14 mb-4 text-2xl font-bold text-white">
					{trimmed.replace("## ", "")}
				</h2>
			);
			continue;
		}

		// Bold list items
		if (trimmed.startsWith("- **")) {
			const match = trimmed.match(/- \*\*(.+?)\*\*:?\s*(.*)/);
			if (match) {
				elements.push(
					<li key={i} className="my-1.5 ml-5 list-disc text-lg leading-relaxed text-zinc-400">
						<strong className="text-white">{match[1]}</strong>
						{match[2] && `: ${match[2]}`}
					</li>
				);
				continue;
			}
		}

		// Regular list items
		if (trimmed.startsWith("- ")) {
			elements.push(
				<li key={i} className="my-1.5 ml-5 list-disc text-lg leading-relaxed text-zinc-400">
					{trimmed.replace("- ", "")}
				</li>
			);
			continue;
		}

		// Numbered list items
		if (/^\d+\.\s/.test(trimmed)) {
			const content = trimmed.replace(/^\d+\.\s/, "");
			const boldMatch = content.match(/\*\*(.+?)\*\*:?\s*(.*)/);
			if (boldMatch) {
				elements.push(
					<li key={i} className="my-1.5 ml-5 list-decimal text-lg leading-relaxed text-zinc-400">
						<strong className="text-white">{boldMatch[1]}</strong>
						{boldMatch[2] && `: ${boldMatch[2]}`}
					</li>
				);
			} else {
				elements.push(
					<li key={i} className="my-1.5 ml-5 list-decimal text-lg leading-relaxed text-zinc-400">
						{content}
					</li>
				);
			}
			continue;
		}

		// Regular paragraph
		elements.push(
			<p key={i} className="my-5 text-lg leading-relaxed text-zinc-400">
				{trimmed}
			</p>
		);
	}

	return elements;
}

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
			<article>
				{/* Header */}
				<header className="mx-auto max-w-3xl px-6 pt-16 pb-10">
					<h1 className="text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">{post.title}</h1>
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

				{/* Hero Image */}
				<div className="mx-auto max-w-5xl px-6">
					{post.heroImage ? (
						<div className="aspect-video w-full overflow-hidden rounded-2xl bg-zinc-800">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={post.heroImage} alt={post.imageDescription} className="h-full w-full object-cover" />
						</div>
					) : (
						<div className="aspect-video w-full overflow-hidden rounded-2xl bg-zinc-800">
							<div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center">
								<svg className="h-10 w-10 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1}
										d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
								<p className="max-w-md text-sm text-zinc-500">{post.imageDescription}</p>
							</div>
						</div>
					)}
				</div>

				{/* Body Content */}
				<div className="mx-auto max-w-3xl px-6 pt-12 pb-16">{renderContent(post.content)}</div>

				{/* Divider */}
				<div className="mx-auto max-w-3xl px-6">
					<hr className="border-zinc-800" />
				</div>

				{/* Author & Share */}
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

				{/* More Posts */}
				<div className="border-t border-zinc-800 bg-zinc-950">
					<div className="mx-auto max-w-5xl px-6 py-16">
						<h2 className="mb-8 text-2xl font-bold text-white">You might also like</h2>
						<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
							{getAllPosts()
								.filter((p) => p.slug !== slug)
								.slice(0, 3)
								.map((relatedPost) => (
									<Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
										<div className="aspect-4/3 w-full overflow-hidden rounded-xl bg-zinc-800">
											{relatedPost.heroImage ? (
												/* eslint-disable-next-line @next/next/no-img-element */
												<img src={relatedPost.heroImage} alt={relatedPost.imageDescription} className="h-full w-full object-cover" />
											) : (
												<div className="flex h-full w-full items-center justify-center p-4 text-center">
													<p className="text-xs text-zinc-500">{relatedPost.imageDescription}</p>
												</div>
											)}
										</div>
										<p className="mt-3 text-xs font-semibold tracking-wider text-purple-500 uppercase">{relatedPost.category}</p>
										<h3 className="mt-1 font-bold text-white transition-colors group-hover:text-purple-500">{relatedPost.title}</h3>
										<p className="mt-1 text-sm text-zinc-500">{prettyDate(relatedPost.publishedAt)}</p>
									</Link>
								))}
						</div>
					</div>
				</div>
			</article>
		</div>
	);
}
