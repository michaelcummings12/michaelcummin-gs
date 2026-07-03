export interface SpringBoardTile {
	backgroundColor: string;
	colSpan?: number;
	expandedBackgroundColor?: string;
	id: string;
	label: string;
	children: React.ReactNode;
	padding?: string;
	/** One-line, outcome-focused summary shown in list views */
	tagline?: string;
	/** Short category label shown as a chip in list views */
	category?: string;
	/** Start date as "YYYY-MM", used to sort and label work in list views */
	date?: string;
}
