import { useEffect, useState } from "react";

export function useMobile(): boolean {
	const [isMobile, setMobile] = useState(false);

	useEffect(() => {
		const media = window.matchMedia("(max-width: 767px)");
		if (media.matches !== isMobile) setMobile(media.matches);
		const listener = () => {
			setMobile(media.matches);
		};
		media.addEventListener("change", listener);
		return () => media.removeEventListener("change", listener);
	}, [isMobile]);

	return isMobile;
}
