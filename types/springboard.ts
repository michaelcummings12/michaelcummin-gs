export interface SpringBoardTile {
	backgroundColor: string;
	expandedBackgroundColor?: string;
	id: string;
	shadow?: string;
	tileIcon: React.ReactElement;
}

export type SpringBoardTiles = SpringBoardTile[];
