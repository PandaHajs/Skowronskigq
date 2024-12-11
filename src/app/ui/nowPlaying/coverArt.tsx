import Image from "next/image";
import { shimmer, toBase64 } from "../../lib/nowPlayingLogic";

export default function CoverArt({ id }: { id: number | undefined }) {
	let src = "/";
	switch (id) {
		case 0:
			src =
				"https://ia802502.us.archive.org/11/items/mbid-81a87ad6-10b8-4fe5-85b2-d65e3864a5b0/mbid-81a87ad6-10b8-4fe5-85b2-d65e3864a5b0-32715657072_thumb250.jpg";
			break;
		case 1:
			src = "https://i1.sndcdn.com/artworks-000235005055-mww7ms-t500x500.jpg";
			break;
		default:
			break;
	}

	return (
		<>
			<Image
				src={src}
				alt="Cover Art"
				width={250}
				height={250}
				priority={false}
				quality={50}
				placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
			/>{" "}
		</>
	);
}
