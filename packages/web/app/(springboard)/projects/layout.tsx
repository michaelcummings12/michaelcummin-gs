"use client";
import { FolderOverlay } from "@web/components/FolderOverlay";
import { openSource } from "@web/lib/openSource";
import { clientWork, ventures } from "@web/lib/projects";
import { SpringBoardTile } from "@web/types/springboard";
import { useRouter } from "next/navigation";

/** Newest first by start date */
const byDateDesc = (items: SpringBoardTile[]) => [...items].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	return (
		<>
			<FolderOverlay
				isOpen={true}
				onClose={() => router.push("/")}
				groups={[
					{ title: "Founded", pathPrefix: "/projects", items: byDateDesc(ventures) },
					{ title: "For clients", pathPrefix: "/projects", items: byDateDesc(clientWork) },
					{ title: "Open source", pathPrefix: "/projects", items: byDateDesc(openSource) }
				]}
			/>
			{children}
		</>
	);
}
