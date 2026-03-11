import { BlogPost } from "@web/lib/blog";
import { cn } from "@web/lib/cn";
import { prettyDate } from "@web/lib/prettyDate";
import Image from "next/image";
import Link from "next/link";

interface PostProps {
	post: BlogPost;
	featured?: boolean;
}

export const Post = ({ post, featured }: PostProps) => {
	const Heading = featured ? "h2" : "h3";
	return (
		<Link href={`/blog/${post.slug}`} className="group block h-full overflow-hidden rounded-3xl bg-zinc-800">
			<article className={cn(featured && "grid md:grid-cols-2")}>
				<div className="overflow-hidden">
					<Image
						src={post.heroImage}
						alt={post.imageDescription}
						width={1200}
						height={630}
						className={cn("ease-default w-full object-cover transition-transform duration-400 group-hover:scale-105", featured ? "aspect-4/3" : "aspect-16/10")}
					/>
				</div>
				<div className="flex flex-col justify-center px-8 py-6">
					<div>
						<Heading className={cn("font-heading font-bold text-white transition-colors", featured ? "text-lg md:text-3xl" : "text-lg md:text-xl")}>{post.title}</Heading>
						<p className="mt-4 text-base text-zinc-400">{post.excerpt}</p>
					</div>
					<time className={cn("mt-4 text-sm text-zinc-500", featured ? "flex items-center gap-1.5" : "block")} dateTime={post.publishedAt.toString()}>
						{prettyDate(post.publishedAt)}
					</time>
				</div>
			</article>
		</Link>
	);
};
