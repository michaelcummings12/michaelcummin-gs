import { Message } from "@web/components/Icons";
import { DefaultLink } from "@web/components/Link";
import Social from "@web/components/Social";
import skyPortrait from "@web/public/assets/sky_portrait_resized.jpg";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "About Me"
};

const skills = {
	frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion"],
	backend: ["Node.js", "AWS Lambda", "API Gateway", "GraphQL", "PostgreSQL", "DynamoDB"],
	cloud: ["AWS", "CloudFormation", "S3", "CloudFront", "Fargate", "Docker"],
	design: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "UI/UX Design", "Brand Identity"]
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
								<p className="text-sm font-medium tracking-wide text-neutral-500">Full-Stack Engineer & Designer</p>
								<h1 className="font-heading mt-1 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">Michael Cummings</h1>
							</div>
							<p className="max-w-xl text-lg leading-relaxed text-neutral-600">
								I build products at the intersection of design and engineering. With over ten years of experience, I specialize in crafting scalable serverless architectures
								and pixel-perfect user interfaces.
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
							I&apos;m a full-stack engineer with deep expertise in <strong className="text-neutral-900">AWS</strong>, <strong className="text-neutral-900">Next.js</strong>,{" "}
							<strong className="text-neutral-900">React</strong>, and <strong className="text-neutral-900">TypeScript</strong>. From architecting scalable serverless
							backends to crafting visually engaging interfaces, I bring a holistic approach to every project.
						</p>
						<p>
							My background with design tools like <strong className="text-neutral-900">Figma</strong>, <strong className="text-neutral-900">Adobe Illustrator</strong>, and{" "}
							<strong className="text-neutral-900">Photoshop</strong> enables me to build brands from the ground up. I&apos;ve created everything from logos and style
							guidelines to high-fidelity product mockups.
						</p>
						<p>
							Beyond my professional roles, I&apos;ve collaborated with local Chicago brands to bring unique, cutting-edge digital experiences to life. Whether I&apos;m
							designing a custom logo, integrating sophisticated payment systems, or architecting secure infrastructure, my goal is to elevate the user experience and help
							brands stand out.
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
