"use client";
import anime from "animejs";
import { FunctionComponent, useEffect, useState } from "react";

const starryNight = () => {
	anime({
		targets: ["#sky .star"],
		opacity: [
			{
				duration: 700,
				value: "0"
			},
			{
				duration: 700,
				value: "1"
			}
		],
		easing: "linear",
		loop: true,
		delay: (el: any, i: any) => 50 * i
	});
};
const shootingStars = () => {
	anime({
		targets: ["#shootingstars .wish"],
		easing: "linear",
		loop: true,
		delay: (el: any, i: any) => 2000 * i,
		opacity: [
			{
				duration: 2000,
				value: "1"
			}
		],
		width: [
			{
				value: "150px"
			},
			{
				value: "0px"
			}
		],
		translateX: 350
	});
};
const randomRadius = () => {
	return Math.random() * 0.7 + 0.6;
};
const getRandomX = (vw: number) => {
	return Math.floor(Math.random() * Math.floor(vw)).toString();
};
const getRandomY = (vh: number) => {
	return Math.floor(Math.random() * Math.floor(vh)).toString();
};

const StarrySky: FunctionComponent = () => {
	const [num, setNum] = useState(0);
	const [vw, setVw] = useState(0);
	const [vh, setVh] = useState(0);

	const [stars, setStars] = useState<Array<any>>();

	const Stars = () => {
		let components: Array<any> = [];
		[...Array(num)].map((x, y) => components.push(<circle cx={getRandomX(vw)} cy={getRandomY(vh)} r={randomRadius()} stroke="none" strokeWidth="0" fill="white" key={y} className="star" />));
		return setStars(components);
	};

	useEffect(() => {
		setNum(Math.round(Math.max(document.documentElement.clientWidth || 0) / 10));
		setVw(Math.max(document.documentElement.clientWidth || 0));
		setVh(Math.max(document.documentElement.clientHeight || 0));
	}, []);

	useEffect(() => {
		starryNight();
		shootingStars();
	}, []);

	useEffect(() => {
		Stars();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [vw, vh]);
	return (
		<div className="h-full w-full top-0 left-0 absolute z-0 translate-x-0 translate-y-0">
			<svg id="sky" className="h-full w-full absolute top-0 left-0 ">
				{stars?.map((e) => {
					return e;
				})}
			</svg>
		</div>
	);
};

export default StarrySky;
