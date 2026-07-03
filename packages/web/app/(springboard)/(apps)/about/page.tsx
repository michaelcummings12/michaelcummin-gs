import { FadeInStagger, FadeInStaggerItem } from "@web/components/FadeIn";
import Social from "@web/components/Social";
import portrait from "@web/public/assets/portrait.jpg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "About",
	description: "Founder and builder. I start companies and ship the products myself.",
	keywords: [
		"Michael Cummings",
		"founder",
		"builder",
		"startup founder",
		"full-stack engineer",
		"Chicago",
		"React",
		"Next.js",
		"TypeScript",
		"AWS",
		"security research"
	],
	alternates: {
		canonical: "/about"
	},
	openGraph: {
		title: "About Michael Cummings",
		description: "Founder and builder. I start companies and ship the products myself.",
		url: "/about"
	},
	twitter: {
		title: "About Michael Cummings",
		description: "Founder and builder. I start companies and ship the products myself."
	}
};

export default function Page() {
	return (
		<div className="h-full w-full overflow-y-auto bg-black text-white">
			{/* Full-bleed cinematic hero */}
			<section className="relative flex min-h-svh w-full items-end overflow-hidden">
				<Image placeholder="blur" src={portrait} alt="Portrait of Michael Cummings" fill priority className="object-cover object-center" sizes="100vw" />
				<div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-black/10" />
				<FadeInStagger className="relative z-10 mx-auto w-full max-w-5xl px-2 pb-16 md:px-6 md:pb-24">
					<FadeInStaggerItem>
						<h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance md:text-8xl">I build the future.</h1>
					</FadeInStaggerItem>
					<FadeInStaggerItem>
						<p className="mt-5 max-w-xl text-xl leading-relaxed text-white/70 md:text-xl">Find a problem, build a product, and ship it to the world.</p>
					</FadeInStaggerItem>
					<FadeInStaggerItem>
						<div className="mt-8">
							<Social />
						</div>
					</FadeInStaggerItem>
				</FadeInStagger>
			</section>

			{/* Body */}
			<FadeInStagger className="mx-auto flex max-w-4xl flex-col gap-20 px-6 py-24 md:gap-28 md:py-28">
				{/* Narrative */}
				<FadeInStaggerItem>
					<section className="flex max-w-2xl flex-col gap-6 text-lg leading-relaxed text-zinc-400 md:text-xl">
						<p className="text-2xl leading-snug font-medium text-balance text-white md:text-3xl">
							Most of what I make starts as my own idea and grows into a real business.
						</p>
						<p>As the founder, the designer, and the engineer, I can take something from an abstract idea to a market-ready polished product.</p>
						<p>
							I grew up in Chicago and am currently living in Los Angeles. Usually, you can find me at music festivals, hanging out with friends, or at a coffee shop with my
							laptop, working on something new.
						</p>
					</section>
				</FadeInStaggerItem>

				{/* Selected work teaser */}
				{/* <FadeInStaggerItem>
					<section className="flex flex-col gap-8">
						<Link href="/projects" className="group inline-flex w-fit items-center gap-1.5 self-end text-sm font-medium text-zinc-400 transition-colors hover:text-white">
							See all
							<svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
								<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</Link>
						<div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
							{featuredProjects.map((v) => (
								<Link key={v.id} href={`/projects/${v.id}`} className="group flex flex-col items-center gap-2.5">
									<AppIcon
										tile={v}
										padding="p-3.5"
										className="aspect-square w-full rounded-[1.25rem] shadow-lg ring-1 ring-white/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
									/>
									<span className="text-center text-xs font-medium text-zinc-500 transition-colors group-hover:text-white">{v.label}</span>
								</Link>
							))}
						</div>
					</section>
				</FadeInStaggerItem> */}

				{/* Close */}
				<FadeInStaggerItem>
					<section className="pt-12">
						<p className="max-w-2xl text-2xl font-medium tracking-tight text-white md:text-3xl">
							I love making new friends.{" "}
							<Link href="/contact" className="underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white">
								Say hello
							</Link>{" "}
							:)
						</p>
					</section>
				</FadeInStaggerItem>
			</FadeInStagger>
		</div>
	);
}
