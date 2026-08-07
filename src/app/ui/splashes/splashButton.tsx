import type { Dispatch, SetStateAction } from "react";
import { lato } from "../../lib/fonts";
import styles from "../styles/splashes.module.scss";

type SplashButtonProps = {
	isTransition: boolean;
	setSplash: Dispatch<SetStateAction<string>>;
	clickSplash: (setSplash: (s: string) => void) => void;
	children: string;
};

export default function SplashButton(props: SplashButtonProps) {
	return (
		<button
			className={
				props.isTransition
					? `${styles.animate} ${lato.className}`
					: `${styles.hide} ${lato.className}`
			}
			onClick={() => props.clickSplash(props.setSplash)}
			type="button"
		>
			{props.children}
		</button>
	);
}
