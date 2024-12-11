import { useEffect, useState } from "react";
import type { musicData } from "@/app/lib/types";

export default function useNowPlaying() {
	const [id, setId] = useState<number>(0);

	const [music, setMusic] = useState<musicData[]>([]);
	useEffect(() => {
		const fetchMusic = async () => {
			try {
				const response = await fetch("/music.json");
				if (response) {
					const { music } = await response.json();
					if (music) {
						setMusic(music);
					}
				}
			} catch (e) {
				throw new Error(String(e));
			}
		};
		fetchMusic();
	}, []);
    return {music, id, setId};
}