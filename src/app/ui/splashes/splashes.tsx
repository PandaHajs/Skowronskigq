"use client";

import SplashButton from "./splashButton";
import { useSplash } from "./splashes.hook";

export default function Splash() {
	const { splash, clickSplash, isTransition, setSplash } = useSplash();
	const splashButtonProps = { isTransition, setSplash, clickSplash };

	return <SplashButton {...splashButtonProps}>{splash}</SplashButton>;
}
