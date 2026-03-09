export interface SpringBoardTile {
	backgroundColor: string;
	colSpan?: number;
	expandedBackgroundColor?: string;
	id: string;
	label: string;
	children: React.ReactNode;
	padding?: string;
}
