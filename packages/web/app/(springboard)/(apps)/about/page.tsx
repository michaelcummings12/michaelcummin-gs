import { Message } from "@web/components/Icons";
import { DefaultLink } from "@web/components/Link";
import Social from "@web/components/Social";
import portrait from "@web/public/assets/portrait.jpg";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "About",
	description:
		"Full Stack Software Engineer with 10+ years of experience building scalable systems and modern web applications. Startup founder, security researcher, and digital nomad.",
	keywords: [
		"Michael Cummings",
		"Full-Stack Engineer",
		"Chicago",
		"React",
		"Next.js",
		"TypeScript",
		"AWS Lambda",
		"AWS",
		"Serverless",
		"Security Research",
		"Startup Founder"
	],
	openGraph: {
		title: "About Michael Cummings",
		description: "Full Stack Engineer, startup founder, and digital nomad building scalable web systems.",
		url: "https://www.michaelcummin.gs/about"
	},
	twitter: {
		title: "About Michael Cummings",
		description: "Full Stack Engineer, startup founder, and digital nomad building scalable web systems."
	}
};

const skills = {
	frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion"],
	backend: ["Node.js", "AWS Lambda", "API Gateway", "GraphQL", "PostgreSQL", "DynamoDB", "Postgres"],
	cloud: ["AWS", "CloudFormation", "S3", "CloudFront", "Fargate", "Docker"],
	design: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe Lightroom"],
	video: ["AV1", "H.264", "HEVC (H.265)", "Video Encoding Workflows", "Transcoding Pipelines", "Streaming Optimization"]
};

export default function Page() {
	return (
		<div className="min-h-full w-full overflow-y-auto bg-white">
			{/* Hero Section */}
			<section className="w-full">
				<div className="mx-auto max-w-4xl px-6 pt-16 pb-8">
					<div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
						{/* Portrait */}
						<div className="group relative mx-auto size-56 shrink-0 overflow-hidden rounded-3xl md:mx-0 md:size-64">
							<Image
								src={portrait}
								className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
								width={600}
								height={600}
								placeholder="blur"
								alt="Portrait of Michael Cummings, Full-Stack Engineer based in Chicago"
								priority
							/>
						</div>

						{/* Intro */}
						<div className="flex flex-col gap-4">
							<div className="flex flex-col gap-2">
								<p className="text-sm font-medium tracking-wide text-neutral-500">Full-Stack Software Engineer</p>
								<h1 className="font-heading mt-1 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">Michael Cummings</h1>
							</div>
							<p className="max-w-xl text-lg leading-relaxed text-neutral-600">Over ten years of experience building robust, scalable systems and modern applications.</p>
							<Social />
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="w-full">
				<div className="mx-auto max-w-4xl px-6 py-8">
					<h2 className="font-heading text-sm font-medium tracking-wider text-neutral-400 uppercase">About</h2>
					<div className="mt-6 flex flex-col gap-6 text-base leading-relaxed text-neutral-700">
						<p>
							I&apos;m a Chicago native and a Full Stack Software Engineer with over a decade of experience building reliable, scalable systems and modern web applications.
							My work focuses on combining strong engineering fundamentals with modern frameworks like Next.js and React to build fast, maintainable, and highly performant
							products.
						</p>

						<p>
							I&apos;m also a startup founder and security researcher. I enjoy exploring how systems work under the hood and continuously experiment with new technologies and
							tools that improve productivity and performance.
						</p>

						<p>
							My engineering approach is highly data-driven. I use metrics and operational data to guide architectural decisions, prioritize work, and validate whether
							delivered systems achieve their intended impact. I&apos;m experienced designing serverless architectures, building CI/CD pipelines, and managing infrastructure
							using infrastructure-as-code practices.
						</p>

						<p>
							I&apos;m also familiar with modern video encoding formats and workflows, including AV1, H.264, and HEVC (H.265), and understand their tradeoffs across
							compression efficiency, performance, and compatibility.
						</p>

						<p>
							Outside of engineering, I love traveling and experiencing new places. I&apos;m currently living as a digital nomad, spending time in cities around the world.
							When I&apos;m not working, you&apos;ll usually find me at music festivals, outdoors, or hanging out with friends.
						</p>

						<p>
							I&apos;m passionate about building great software, contributing to open-source projects, and continuously experimenting with emerging technologies that push the
							boundaries of what&apos;s possible.
						</p>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section className="w-full bg-neutral-100">
				<div className="mx-auto max-w-4xl px-6 py-8">
					<h2 className="font-heading text-sm font-medium tracking-wider text-neutral-400 uppercase">Skills</h2>
					<div className="mt-8 grid gap-8 sm:grid-cols-2">
						<div>
							<h3 className="font-heading text-xs font-semibold tracking-wider text-neutral-500 uppercase">Frontend</h3>
							<div className="mt-3 flex flex-wrap gap-2">
								{skills.frontend.map((skill) => (
									<span key={skill} className="rounded-full bg-white px-3 py-1.5 text-sm text-neutral-700 ring-1 ring-neutral-200">
										{skill}
									</span>
								))}
							</div>
						</div>

						<div>
							<h3 className="font-heading text-xs font-semibold tracking-wider text-neutral-500 uppercase">Backend</h3>
							<div className="mt-3 flex flex-wrap gap-2">
								{skills.backend.map((skill) => (
									<span key={skill} className="rounded-full bg-white px-3 py-1.5 text-sm text-neutral-700 ring-1 ring-neutral-200">
										{skill}
									</span>
								))}
							</div>
						</div>

						<div>
							<h3 className="font-heading text-xs font-semibold tracking-wider text-neutral-500 uppercase">Cloud & DevOps</h3>
							<div className="mt-3 flex flex-wrap gap-2">
								{skills.cloud.map((skill) => (
									<span key={skill} className="rounded-full bg-white px-3 py-1.5 text-sm text-neutral-700 ring-1 ring-neutral-200">
										{skill}
									</span>
								))}
							</div>
						</div>

						<div>
							<h3 className="font-heading text-xs font-semibold tracking-wider text-neutral-500 uppercase">Design</h3>
							<div className="mt-3 flex flex-wrap gap-2">
								{skills.design.map((skill) => (
									<span key={skill} className="rounded-full bg-white px-3 py-1.5 text-sm text-neutral-700 ring-1 ring-neutral-200">
										{skill}
									</span>
								))}
							</div>
						</div>

						<div>
							<h3 className="font-heading text-xs font-semibold tracking-wider text-neutral-500 uppercase">Video</h3>
							<div className="mt-3 flex flex-wrap gap-2">
								{skills.video.map((skill) => (
									<span key={skill} className="rounded-full bg-white px-3 py-1.5 text-sm text-neutral-700 ring-1 ring-neutral-200">
										{skill}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact CTA */}
			<section className="w-full border-t border-neutral-200 bg-neutral-900">
				<div className="mx-auto max-w-4xl px-6 py-16">
					<p className="font-heading mt-4 text-2xl font-medium text-white md:text-3xl">Have a project in mind? Let&apos;s build something great together.</p>
					<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
						<DefaultLink
							href="/contact"
							icon={<Message />}
							label="Get in touch"
							className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-all hover:bg-neutral-100"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
