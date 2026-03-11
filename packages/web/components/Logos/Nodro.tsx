"use client";
import { useTimeBasedRotation } from "@web/hooks/useTimeBasedRotation";

export function NodroLogo({ className }: React.SVGProps<SVGSVGElement>) {
	const rotation = useTimeBasedRotation(70);
	return (
		<div className={className}>
			<div
				className="h-full w-full will-change-transform"
				style={{
					background: "conic-gradient(from 210deg, var(--color-nodro) 0%, var(--color-orange-50) 18%, var(--color-nodro) 55%)",
					mixBlendMode: "multiply",
					borderRadius: "50%",
					transform: `rotate(${rotation}deg)`
				}}
			/>
		</div>
	);
}
