import styles from "../styles/splashes.module.scss";
import { lato } from "../../lib/fonts";
import type { Dispatch, SetStateAction } from "react";

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
