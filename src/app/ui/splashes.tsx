"use client";
import { useCallback, useEffect, useState } from "react";
import styles from "./styles/splashes.module.scss";
import { lato } from "../lib/fonts";

export default function Splash() {
	const [splash, setSplash] = useState<string>("...");
	const [isTransition, setIsTransition] = useState<boolean>(false);
	const getSplashes = useCallback(async () => {
		try {
			const response = await fetch("/api", {
				method: "GET",
			});
			if (response) {
				const { splash } = await response.json();
				if (splash)
					setSplash(splash[Math.floor(Math.random() * splash.length)]);
			}
		} catch (e) {
			console.error(e);
			setSplash("...");
		}
	}, []);

	function clickSplash(setSplash: (s: string) => void) {
		setTimeout(() => {
			setIsTransition(false);
		}, 400);
		setTimeout(() => {
			getSplashes();
		}, 100);
		setTimeout(() => {
			setIsTransition(true);
		}, 100);
	}

	useEffect(() => {
		getSplashes();
		setIsTransition(true);
		setTimeout(() => {
			setIsTransition(false);
		}, 400);
	}, [getSplashes]);

	return (
		<button
			className={
				isTransition
					? `${styles.animate} ${lato.className}`
					: `${styles.hide} ${lato.className}`
			}
			onClick={() => clickSplash(setSplash)}
			type="button"
		>
			{splash}
		</button>
	);
}
