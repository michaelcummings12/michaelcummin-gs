import Image from "next/image";

export function FlappyBirdLogo(props: React.ImgHTMLAttributes<HTMLImageElement>) {
	return <Image {...props} src="/assets/bird.gif" alt="Flappy Bird" width={1024} height={1024} />;
}
