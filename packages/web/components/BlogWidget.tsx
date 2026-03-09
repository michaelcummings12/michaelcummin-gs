"use client";
import { getAllPosts } from "@web/lib/blog";
import { prettyDate } from "@web/lib/prettyDate";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const DISPLAY_INTERVAL = 6700;

export const BlogWidget = () => {
	const posts = getAllPosts();
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 2) % posts.length);
		}, DISPLAY_INTERVAL);
		return () => clearInterval(interval);
	}, []);
	const currentPosts = [posts[index % posts.length], posts[(index + 1) % posts.length]];
	return (
		<div className="flex h-full w-full flex-col text-left text-white">
			<div className="relative flex min-h-0 flex-1 flex-col gap-2 md:gap-4">
				<AnimatePresence mode="popLayout">
					{currentPosts.map((post, i) => (
						<motion.div
							key={post.slug}
							initial={{ rotateX: 90, opacity: 0 }}
							animate={{ rotateX: 0, opacity: 1 }}
							exit={{ rotateX: -90, opacity: 0 }}
							transition={{
								duration: 0.8,
								delay: i * 0.2,
								type: "spring",
								stiffness: 100
							}}
							className="relative flex flex-1 flex-row items-center gap-2 truncate rounded-2xl bg-white/10 p-2 md:rounded-3xl md:p-4"
							style={{ transformOrigin: "top" }}>
							<Image src={post.heroImage!} alt={post.title} width={1200} height={630} className="aspect-square h-full w-auto rounded-xl object-cover" />
							<div className="flex flex-col">
								<p className="line-clamp-3 text-sm leading-tight font-bold md:text-xl">{post.title}</p>
								<p className="text-xs text-white/50 md:text-base">{prettyDate(post.publishedAt)}</p>
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
};
