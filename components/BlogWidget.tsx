"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const posts = [
	{ title: "Automating Pool Bed Reservations at a Private Members Club", id: 1 },
	{ title: "Exploring the Security of a Major City's Digital Infrastructure", id: 2 },
	{ title: "Building a GPU Cryptocurrency Mining Rig", id: 3 }
];

export const BlogWidget = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 2) % posts.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const currentPosts = [posts[index % posts.length], posts[(index + 1) % posts.length]];

	return (
		<div className="flex h-full w-full flex-col text-left text-white">
			<div className="relative flex min-h-0 flex-1 flex-col gap-4">
				<AnimatePresence mode="popLayout">
					{currentPosts.map((post, i) => (
						<motion.div
							key={post.id}
							initial={{ rotateX: 90, opacity: 0 }}
							animate={{ rotateX: 0, opacity: 1 }}
							exit={{ rotateX: -90, opacity: 0 }}
							transition={{
								duration: 0.8,
								delay: i * 0.2,
								type: "spring",
								stiffness: 100
							}}
							className="flex flex-1 flex-col justify-center rounded-xl bg-white/10 p-4 backdrop-blur-sm"
							style={{ transformOrigin: "top" }}>
							<h3 className="line-clamp-3 truncate text-lg leading-tight font-bold md:text-xl">{post.title}</h3>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
};
