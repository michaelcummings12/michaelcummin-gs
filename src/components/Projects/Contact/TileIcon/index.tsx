import { FunctionComponent } from "react";
import { Contact } from "../../../icons";

export const TileIcon: FunctionComponent = () => {
	return (
		<div className="aspect-square">
			<div className="flex items-center justify-center h-full w-full p-4 md:p-8">
				<Contact className="drop-shadow-xl h-full w-full" />
			</div>
		</div>
	);
};
