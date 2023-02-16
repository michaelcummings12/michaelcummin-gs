import Image from "next/image";
import { FunctionComponent } from "react";
import sharehouseHero from "../../../../../public/assets/sharehouse-hero.jpg";
import { Link } from "../Link";
import { Logo } from "../Logo";

export const ProjectHeader: FunctionComponent = () => {
	return (
		<div className="h-full w-full p-2 flex items-center justify-center relative bg-white">
			<div className="rounded-3xl overflow-hidden h-full w-full relative">
				<Image layout="fill" quality={100} placeholder="blur" src={sharehouseHero} className="object-cover h-full w-full" alt="Cardboard boxes and green plants against a white backdrop" />
			</div>
			<div className="absolute md:-bottom-2 -bottom-8 left-1/2 -translate-x-1/2 px-6 w-full lg:w-auto">
				<div className="flex justify-center">
					<div className="bg-white border border-gray-100 flex rounded-3xl lg:py-8 lg:px-16 p-8 shadow-xl flex-col gap-12">
						<Logo className="h-full w-full fill-projects-sh max-h-[128px]" />
						<Link href="https://sharehousestorage.com/" label="Visit ShareHouseStorage.com" />
					</div>
				</div>
			</div>
		</div>
	);
};
