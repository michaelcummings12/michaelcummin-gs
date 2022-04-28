import { FunctionComponent } from "react";
import { Experimental } from "../../../icons";

export const TileIcon: FunctionComponent = () => {
	return (
		<div className="aspect-square">
			<div className="flex items-center justify-center h-full w-full p-4">
				<Experimental className="drop-shadow-xl h-full w-full" />
			</div>
		</div>
	);
};
