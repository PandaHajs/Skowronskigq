import { useEffect, useState } from "react";

export function useSplash() {
	const [splash, setSplash] = useState<string>("...");
	const [isTransition, setIsTransition] = useState<boolean>(false);
	const names: string[] = [
		"An IT Student",
		"Kac Biznesu",
		"Just some random guy",
		"The perfect victim",
		"A beloved boyfriend",
		"A guy who has no idea what he's doing",
		"All hands to battle stations!",
		"General Kenobi",
		"Lvl 9 wizard",
		"I saw corpos strip farmers of water",
		"Technoblade never dies",
		"I am not there; I did not die.",
	];

	function clickSplash(setSplash: (s: string) => void) {
		setTimeout(() => {
			setIsTransition(false);
		}, 400);
		setTimeout(() => {
			setSplash(names[Math.floor(Math.random() * names.length)]);
		}, 100);
		setTimeout(() => {
			setIsTransition(true);
		}, 100);
	}

	useEffect(() => {
		clickSplash(setSplash);
		setIsTransition(true);
		setTimeout(() => {
			setIsTransition(false);
		}, 400);
	}, []);
	return { splash, clickSplash, isTransition, setSplash };
}
