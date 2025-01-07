import { SpringBoard } from "@/components/SpringBoard";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SpringBoard />
			{children}
		</>
	);
}
