import Head from "next/head";
import React, { FunctionComponent } from "react";
import ContactForm from "../../../ContactForm";

export const ProjectContent: FunctionComponent = () => {
	return (
		<>
			<Head>
				<title>Contact | Michael Cummings</title>
			</Head>
			<div className="h-full w-full px-2 py-2">
				<div className="w-full h-full flex">
					<div className="bg-white/60 rounded-3xl md:max-w-[680px] w-full h-full md:h-auto shadow-inset m-auto">
						<ContactForm />
					</div>
				</div>
			</div>
		</>
	);
};
