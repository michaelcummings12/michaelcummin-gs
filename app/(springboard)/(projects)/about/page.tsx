import Social from "@/components/Social";
import skyPortrait from "@/public/assets/sky_portrait_resized.jpg";
import { Metadata } from "next";
import Image from "next/image";
import { SendMessageButton } from "./SendMessageButton";

export const metadata: Metadata = {
	title: "About | Michael Cummings"
};

export default function Page() {
	return (
		<div className="h-full w-full bg-white">
			<div className="p-2 w-full h-1/2">
				<div className="rounded-3xl overflow-hidden h-full w-full relative m-auto">
					<Image src={skyPortrait} layout="fill" className="object-cover h-full w-full" quality={100} placeholder="blur" alt="Portrait of Michael Cummings against a city backdrop." />
				</div>
			</div>
			<div className="w-full flex justify-center bg-white">
				<div className="max-w-[680px] relative py-6 w-full lg:w-auto flex flex-col gap-8 px-2">
					<div className="flex flex-col gap-4">
						<div className="flex flex-row gap-3 lg:text-5xl text-4xl h-full">
							<h1 className="font-semibold text-black">Hey,</h1>
							<h1 className="text-black">I&apos;m Michael.</h1>
						</div>
						<Social />
					</div>
					<div className="leading-7 tracking-[0.02rem] text-lg flex flex-col gap-2 text-black">
						<p>
							I&apos;m a full-stack engineer with over six years of experience with AWS, Next.js, React, and TypeScript. From architecting scalable serverless backends to crafting visually engaging interfaces, I bring a holistic approach to every project.
							My background with design tools like Adobe Illustrator, Adobe Photoshop, and Figma enables me to build brands from the ground up. I&apos;ve created everything from logos and style guidelines to high-fidelity product mockups.
						</p>
						<p>Beyond my professional roles, I&apos;ve collaborated with local Chicago brands to bring unique, cutting-edge digital experiences to life.</p>
						<p>
							Whether I&apos;m designing a custom logo, integrating sophisticated payment systems, or architecting secure, scalable infrastructure, my goal is to elevate the user experience and help brands stand out in a crowded digital landscape.
							Ultimately, I thrive on solving complex technical challenges and delivering products that exceed expectations—from concept to completion.
						</p>
						<p>
							Please feel free to <SendMessageButton /> or you can email me at
						</p>
						<a className="text-projects-gcn-500 underline" href="mailto:hello@michaelcummin.gs">
							hello@michaelcummin.gs
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
