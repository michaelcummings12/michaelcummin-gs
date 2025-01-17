export interface SpringBoardTile {
	backgroundColor: string;
	expandedBackgroundColor?: string;
	id: string;
	label: string;
	tileIcon: React.ReactElement;
}

export type SpringBoardTiles = SpringBoardTile[];
