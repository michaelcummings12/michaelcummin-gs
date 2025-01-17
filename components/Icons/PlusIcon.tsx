import * as React from "react";

function SvgPlusIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 725 725" {...props}>
			<path d="M626 263.5H461.5V99c0-54.45-44.55-99-99-99s-99 44.55-99 99v164.5H99c-54.45 0-99 44.55-99 99s44.55 99 99 99h164.5V626c0 54.45 44.55 99 99 99s99-44.55 99-99V461.5H626c54.45 0 99-44.55 99-99s-44.55-99-99-99z" />
		</svg>
	);
}

export default SvgPlusIcon;
