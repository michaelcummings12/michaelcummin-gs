"use client";
import { FolderOverlay } from "@/components/FolderOverlay";
import { useRouter } from "next/navigation";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	return (
		<>
			<FolderOverlay isOpen={true} onClose={() => router.push("/")} />
			{children}
		</>
	);
}
