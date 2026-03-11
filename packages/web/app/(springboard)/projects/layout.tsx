"use client";
import { FolderOverlay } from "@web/components/FolderOverlay";
import { projects } from "@web/lib/projects";
import { useRouter } from "next/navigation";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	return (
		<>
			<FolderOverlay items={projects} isOpen={true} onClose={() => router.push("/")} pathPrefix="/projects" />
			{children}
		</>
	);
}
