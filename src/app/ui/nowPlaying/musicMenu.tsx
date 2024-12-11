import { SkipBack, Pause, SkipForward } from "lucide-react";
import styles from "../styles/nowPlaying.module.scss";
import type { Dispatch } from "react";
import { changeID } from "@/app/lib/nowPlayingLogic";
import type { musicData } from "@/app/lib/types";

export default function MusicMenu({
	setId,
	id,
	music,
}: { setId: Dispatch<number>; id: number; music: musicData[] }) {
	return (
		<div className={styles.musicMenu}>
			<SkipBack
				size={32}
				onClick={() => {
					changeID(setId, id, false, music);
				}}
				tabIndex={0}
				onKeyDown={(e) => {
					e.key === "Enter" && changeID(setId, id, false, music);
				}}
			/>
			<Pause size={32} />
			<SkipForward
				size={32}
				onClick={() => {
					changeID(setId, id, true, music);
				}}
				tabIndex={0}
				onKeyDown={(e) => {
					e.key === "Enter" && changeID(setId, id, false, music);
				}}
			/>
		</div>
	);
}
