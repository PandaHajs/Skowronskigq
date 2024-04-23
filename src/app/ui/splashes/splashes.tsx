"use client";

import { useSplash } from "./splashes.hook";
import SplashButton from "./splashButton";

export default function Splash() {
	const { splash, clickSplash, isTransition, setSplash } = useSplash();
	const splashButtonProps = { isTransition, setSplash, clickSplash };

	return <SplashButton {...splashButtonProps}>{splash}</SplashButton>;
}
