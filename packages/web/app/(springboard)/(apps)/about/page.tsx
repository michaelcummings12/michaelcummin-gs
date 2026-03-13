import { Message } from "@web/components/Icons";
import { DefaultLink } from "@web/components/Link";
import Social from "@web/components/Social";
import skyPortrait from "@web/public/assets/sky_portrait_resized.jpg";
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
	backend: ["Node.js", "AWS Lambda", "API Gateway", "GraphQL", "PostgreSQL", "DynamoDB"],
	cloud: ["AWS", "CloudFormation", "S3", "CloudFront", "Fargate", "Docker"],
	design: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "UI/UX Design", "Brand Identity"],
	video: ["AV1", "H.264", "HEVC (H.265)", "Video Encoding Workflows", "Transcoding Pipelines", "Streaming Optimization"]
};

const experience = [
	{
		role: "Senior Full-Stack Engineer",
		company: "Freelance / Contract",
		period: "2021 - Present",
		description:
			"Architecting and building scalable web applications for startups and established brands. Focus on serverless AWS infrastructure and modern React frontends.",
		technologies: ["Next.js", "AWS", "TypeScript", "React"]
	},
	{
		role: "Full-Stack Developer",
		company: "Various Chicago Brands",
		period: "2018 - 2021",
		description:
			"Collaborated with local businesses to create digital experiences, from e-commerce platforms to custom web applications. Led both technical implementation and brand design.",
		technologies: ["React", "Node.js", "PostgreSQL", "Figma"]
	}
];

export default function Page() {
	return (
		<div className="min-h-full w-full overflow-y-auto bg-white">
			{/* Hero Section */}
			<section className="w-full">
				<div className="mx-auto max-w-4xl px-6 pt-16 pb-12">
					<div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
						{/* Portrait */}
						<div className="relative mx-auto h-48 w-48 shrink-0 overflow-hidden rounded-2xl md:mx-0 md:h-56 md:w-56">
							<Image
								src={skyPortrait}
								fill
								className="object-cover"
								quality={100}
								placeholder="blur"
								alt="Portrait of Michael Cummings, Full-Stack Engineer based in Chicago"
								priority
							/>
						</div>

						{/* Intro */}
						<div className="flex flex-col gap-4">
							<div>
								<p className="text-sm font-medium tracking-wide text-neutral-500">Full-Stack Software Engineer</p>
								<h1 className="font-heading mt-1 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">Michael Cummings</h1>
							</div>
							<p className="max-w-xl text-lg leading-relaxed text-neutral-600">
								I&apos;m a Full Stack Software Engineer with over ten years of experience building robust, scalable systems and modern web applications. I specialize in
								creating high-performance platforms using modern frameworks like Next.js and React while designing architectures that scale.
							</p>
							<Social />
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="w-full border-t border-neutral-200">
				<div className="mx-auto max-w-4xl px-6 py-12">
					<h2 className="font-heading text-sm font-medium tracking-wider text-neutral-400 uppercase">About</h2>
					<div className="mt-6 flex flex-col gap-6 text-base leading-relaxed text-neutral-700">
						<p>
							I&apos;m a Chicago native and a <strong className="text-neutral-900">Full Stack Software Engineer</strong> with over a decade of experience building reliable,
							scalable systems and modern web applications. My work focuses on combining strong engineering fundamentals with modern frameworks like{" "}
							<strong className="text-neutral-900">Next.js</strong> and <strong className="text-neutral-900">React</strong> to build fast, maintainable, and highly performant
							products.
						</p>

						<p>
							I&apos;m also a <strong className="text-neutral-900">startup founder</strong> and conduct <strong className="text-neutral-900">security research</strong>. I
							enjoy exploring how systems work under the hood and continuously experiment with new technologies and tools that improve productivity, performance, and
							developer workflows.
						</p>

						<p>
							My engineering approach is highly <strong className="text-neutral-900">data-driven</strong>. I use metrics and operational data to guide architectural
							decisions, prioritize work, and validate whether delivered systems achieve their intended impact. I&apos;m experienced designing serverless architectures,
							building CI/CD pipelines, and managing infrastructure using infrastructure-as-code practices.
						</p>

						<p>
							I&apos;m also familiar with modern <strong className="text-neutral-900">video encoding formats and workflows</strong>, including AV1, H.264, and HEVC (H.265),
							and understand their tradeoffs across compression efficiency, performance, and compatibility.
						</p>

						<p>
							Outside of engineering, I love traveling and experiencing new places. I&apos;m currently living as a <strong className="text-neutral-900">digital nomad</strong>
							, spending time in cities around the world. When I&apos;m not working, you&apos;ll usually find me at music festivals, outdoors, or spending time with friends.
						</p>

						<p>
							I&apos;m passionate about building great software, contributing to open-source projects, and continuously experimenting with emerging technologies that push the
							boundaries of what&apos;s possible on the web.
						</p>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section className="w-full border-t border-neutral-200 bg-neutral-50">
				<div className="mx-auto max-w-4xl px-6 py-12">
					<h2 className="font-heading text-sm font-medium tracking-wider text-neutral-400 uppercase">Skills & Expertise</h2>
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
