"use client";
import { FunctionComponent } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface YouTubeEmbedProps {
	/** The title of the video. */
	title?: string;
	/** The ID of the YouTube video to embed. This is the 11 character string after the v= in the URL. */
	videoId: string;
}

export const YouTubeEmbed: FunctionComponent<YouTubeEmbedProps> = ({ title, videoId }) => (
	<div className="relative aspect-video w-full overflow-hidden rounded-3xl [&_.yt-lite]:h-full [&_.yt-lite]:w-full [&_.yt-lite]:rounded-3xl!">
		<LiteYouTubeEmbed id={videoId} title={title ?? "YouTube Video"} poster="maxresdefault" />
	</div>
);
