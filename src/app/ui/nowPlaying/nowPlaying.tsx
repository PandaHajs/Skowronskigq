"use client";
import useNowPlaying from "./nowPlaying.hook";
import CoverArt from "./coverArt";
import styles from "../styles/nowPlaying.module.scss";
import MusicMenu from "./musicMenu";

export default function NowPlaying() {
	const { music, id, setId } = useNowPlaying();

	return (
		<div className={styles.container}>
			<h3>Now Playing</h3>
			<div className={styles.song}>
				<CoverArt id={id} />
				<div>
					<p>{music?.[id]?.title || "Loading..."}</p>
					<p>{music?.[id]?.artist || "Loading..."}</p>
				</div>
			</div>
			<MusicMenu setId={setId} id={id} music={music || []} />
		</div>
	);
}
