import Head from "next/head";
import React, { FunctionComponent } from "react";
import { useMobile } from "../../../../hooks/useMobile";
import ContactForm from "../../../ContactForm";

export const ProjectContent: FunctionComponent = () => {
	const isMobile = useMobile();

	return (
		<>
			<Head>
				<title>Contact | Michael Cummings</title>
			</Head>
			<div className="h-full w-full px-2 pt-[80px] pb-2">
				<div className="h-full w-full md:flex md:items-center">
					{isMobile && (
						<div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 p-4 z-50">
							<h1 className="text-white-500 font-bold text-5xl visible md:invisible">What&apos;s up?</h1>
						</div>
					)}
					<div className="md:flex md:flex-col md:items-center gap-8 w-full h-full md:h-auto relative">
						{!isMobile && <h1 className="-top-[80px] absolute text-white-500 font-bold text-5xl invisible md:visible">What&apos;s up?</h1>}
						<div className="flex bg-white-500/60 rounded-xl md:max-w-[680px] w-full h-full shadow-inset">
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
