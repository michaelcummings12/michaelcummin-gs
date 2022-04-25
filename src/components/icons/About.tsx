import { SVGProps } from "react";

const SvgAbout = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 287.98" {...props}>
		<defs>
			<linearGradient id="About_svg__a" x1={306} x2={306} y2={287.98} gradientUnits="userSpaceOnUse">
				<stop offset={0} stopColor="#fff" />
				<stop offset={0.15} stopColor="#fff" stopOpacity={0.98} />
				<stop offset={0.34} stopColor="#fff" stopOpacity={0.92} />
				<stop offset={0.55} stopColor="#fff" stopOpacity={0.81} />
				<stop offset={0.77} stopColor="#fff" stopOpacity={0.67} />
				<stop offset={1} stopColor="#fff" stopOpacity={0.5} />
			</linearGradient>
		</defs>
		<path
			d="m334.73 44.93-42.36 200.26c-6 26.1-16.26 39.37-41.08 39.37h-9.84c-23.11 0-35.09-14.12-29.1-40.65l8.56-41.08 18-83.87-48.35 89c-6 11.13-8.13 20.54-37.66 20.54-34.23 0-32.95-10.27-34.66-21.4L107.08 125l-16.69 77.83-9 42.36c-5.56 26.1-16.26 39.37-41.08 39.37h-9.83c-23.11 0-34.66-14.12-29.1-40.65L43.75 44.5C49.32 17.54 65.58 3.42 90 3.42h21.82c22.25 0 30.38 7.27 33.38 24.82l21.4 110 70.17-113C247.44 7.7 258.56 3.42 277.39 3.42h27c25.61 0 35.9 14.58 30.34 41.51Zm9 119C343.71 77 409.61 0 502.89 0c48.35 0 75.74 14.12 92 30.38C606.87 41.93 612 56.48 612 65.9c0 44.5-54.34 48.78-55.63 46.21C547.38 90.72 530.69 77 504.59 77c-41.08 0-72.32 35.09-72.32 77.88 0 32.09 22.25 56.06 54.35 56.06 24.39 0 43.65-10.27 56.06-29.1 1.71-2.57 42.79 7.27 42.79 39.8 0 11.13-6 22.68-17.12 33.8-18 18-49.64 32.52-88.58 32.52-83 0-136.07-48.35-136.07-124.09Z"
			style={{
				fill: "url(#About_svg__a)"
			}}
		/>
	</svg>
);

export default SvgAbout;
