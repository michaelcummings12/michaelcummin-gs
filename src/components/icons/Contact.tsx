import * as React from "react";
import type { SVGProps } from "react";
const SvgContact = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 492.9 379.18" {...props}>
		<defs>
			<linearGradient id="Contact_svg__a" x1={246.45} x2={246.45} y1={381.18} y2={2} gradientTransform="matrix(1 0 0 -1 0 381.18)" gradientUnits="userSpaceOnUse">
				<stop offset={0} stopColor="#fff" />
				<stop offset={0.15} stopColor="#fff" stopOpacity={0.98} />
				<stop offset={0.34} stopColor="#fff" stopOpacity={0.92} />
				<stop offset={0.55} stopColor="#fff" stopOpacity={0.81} />
				<stop offset={0.77} stopColor="#fff" stopOpacity={0.67} />
				<stop offset={1} stopColor="#fff" stopOpacity={0.5} />
			</linearGradient>
		</defs>
		<path
			d="M492.9 189.58C492.9 84.83 382.59 0 246.45 0S0 84.82 0 189.58c0 40.63 16.71 78.07 45 109-15.85 35.79-42 64.22-42.4 64.58a9.4 9.4 0 0 0-1.78 10.29 9.29 9.29 0 0 0 8.65 5.73c43.37 0 79.27-14.57 105.1-29.62 38.15 18.61 83.29 29.62 131.88 29.62 136.14-.04 246.45-84.87 246.45-189.6"
			style={{
				fill: "url(#Contact_svg__a)"
			}}
		/>
	</svg>
);
export default SvgContact;
