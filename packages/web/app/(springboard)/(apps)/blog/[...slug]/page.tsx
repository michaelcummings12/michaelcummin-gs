import Social from "@web/components/Social";
import { getAllPosts, getPostBySlug } from "@web/lib/blog";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
	params: Promise<{ slug: string[] }>;
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
			publishedTime: post.publishedAt,
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

function formatDate(dateString: string) {
	return new Date(dateString).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric"
	});
}

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
						<pre className="overflow-x-auto rounded-xl bg-neutral-900 p-6">
							<code className="text-sm leading-relaxed text-neutral-300">{codeLines.join("\n")}</code>
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

		// Headings
		if (trimmed.startsWith("### ")) {
			elements.push(
				<h3 key={i} className="mt-10 mb-4 text-xl font-bold text-neutral-900">
					{trimmed.replace("### ", "")}
				</h3>
			);
			continue;
		}
		if (trimmed.startsWith("## ")) {
			elements.push(
				<h2 key={i} className="mt-14 mb-4 text-2xl font-bold text-neutral-900">
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
					<li key={i} className="my-1.5 ml-5 list-disc text-lg leading-relaxed text-neutral-600">
						<strong className="text-neutral-900">{match[1]}</strong>
						{match[2] && `: ${match[2]}`}
					</li>
				);
				continue;
			}
		}

		// Regular list items
		if (trimmed.startsWith("- ")) {
			elements.push(
				<li key={i} className="my-1.5 ml-5 list-disc text-lg leading-relaxed text-neutral-600">
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
					<li key={i} className="my-1.5 ml-5 list-decimal text-lg leading-relaxed text-neutral-600">
						<strong className="text-neutral-900">{boldMatch[1]}</strong>
						{boldMatch[2] && `: ${boldMatch[2]}`}
					</li>
				);
			} else {
				elements.push(
					<li key={i} className="my-1.5 ml-5 list-decimal text-lg leading-relaxed text-neutral-600">
						{content}
					</li>
				);
			}
			continue;
		}

		// Regular paragraph
		elements.push(
			<p key={i} className="my-5 text-lg leading-relaxed text-neutral-600">
				{trimmed}
			</p>
		);
	}

	return elements;
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
		<div className="min-h-full bg-white">
			{/* Top nav bar */}
			<div className="border-b border-neutral-200">
				<div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
					<Link href="/blog" className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900">
						Blog
					</Link>
					<div className="flex items-center gap-6">
						{post.tags.slice(0, 2).map((tag) => (
							<span key={tag} className="text-sm text-neutral-400">
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>

			<article>
				{/* Header */}
				<header className="mx-auto max-w-3xl px-6 pt-16 pb-10">
					<p className="mb-4 text-sm font-semibold tracking-wider text-orange-500 uppercase">{post.category}</p>
					<h1 className="text-4xl leading-tight font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">{post.title}</h1>
					<p className="mt-6 text-xl leading-relaxed text-neutral-500">{post.excerpt}</p>
					<div className="mt-8 flex items-center gap-4">
						<div className="h-12 w-12 overflow-hidden rounded-full bg-neutral-200">
							<div className="flex h-full w-full items-center justify-center text-sm font-bold text-neutral-500">MC</div>
						</div>
						<div>
							<p className="text-sm font-medium text-neutral-900">Michael Cummings</p>
							<p className="text-sm text-neutral-500">
								{formatDate(post.publishedAt)} &middot; {post.readingTime}
							</p>
						</div>
					</div>
				</header>

				{/* Hero Image Placeholder */}
				<div className="mx-auto max-w-5xl px-6">
					<div className="aspect-video w-full overflow-hidden rounded-2xl bg-neutral-100">
						<div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center">
							<svg className="h-10 w-10 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1}
									d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							<p className="max-w-md text-sm text-neutral-400">{post.imageDescription}</p>
						</div>
					</div>
				</div>

				{/* Body Content */}
				<div className="mx-auto max-w-3xl px-6 pt-12 pb-16">{renderContent(post.content)}</div>

				{/* Divider */}
				<div className="mx-auto max-w-3xl px-6">
					<hr className="border-neutral-200" />
				</div>

				{/* Author & Share */}
				<div className="mx-auto max-w-3xl px-6 py-12">
					<div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
						<div className="flex items-center gap-4">
							<div className="h-14 w-14 overflow-hidden rounded-full bg-neutral-200">
								<div className="flex h-full w-full items-center justify-center text-lg font-bold text-neutral-500">MC</div>
							</div>
							<div>
								<p className="font-semibold text-neutral-900">Michael Cummings</p>
								<p className="text-sm text-neutral-500">Full-Stack Engineer</p>
							</div>
						</div>
						<Social />
					</div>
				</div>

				{/* More Posts */}
				<div className="border-t border-neutral-200 bg-neutral-50">
					<div className="mx-auto max-w-5xl px-6 py-16">
						<h2 className="mb-8 text-2xl font-bold text-neutral-900">More from the Blog</h2>
						<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
							{getAllPosts()
								.filter((p) => p.slug !== slug)
								.slice(0, 3)
								.map((relatedPost) => (
									<Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
										<div className="aspect-4/3 w-full overflow-hidden rounded-xl bg-neutral-200">
											<div className="flex h-full w-full items-center justify-center p-4 text-center">
												<p className="text-xs text-neutral-400">{relatedPost.imageDescription}</p>
											</div>
										</div>
										<p className="mt-3 text-xs font-semibold tracking-wider text-orange-500 uppercase">{relatedPost.category}</p>
										<h3 className="mt-1 font-bold text-neutral-900 transition-colors group-hover:text-orange-500">{relatedPost.title}</h3>
										<p className="mt-1 text-sm text-neutral-500">{formatDate(relatedPost.publishedAt)}</p>
									</Link>
								))}
						</div>
					</div>
				</div>
			</article>
		</div>
	);
}
