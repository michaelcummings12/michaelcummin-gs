import Head from "next/head";
import { FunctionComponent } from "react";

export const ProjectContent: FunctionComponent = () => {
	return (
		<>
			<Head>
				<title>Experimental Projects | Michael Cummings</title>
			</Head>
			<div className="p-2 pb-0 h-full w-full">
				<div className="bg-white h-full w-full rounded-3xl rounded-b-0 p-6">
					<div className="background-experimental bg-clip-text font-bold text-5xl text-transparent h-full">
						<h1>Building a more meaningful internet.</h1>
					</div>
				</div>
			</div>
		</>
	);
};
