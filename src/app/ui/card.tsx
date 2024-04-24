import { getMyAge, getMyArticle } from "../lib/age";
import { lexend } from "../lib/fonts";
import styles from "./styles/card.module.scss";

export default function Card({ children }: { children: React.ReactNode }) {
	const age: number = getMyAge();
	const article: string = getMyArticle();
	return (
		<section className={styles.text}>
			<div className={styles.top}>
				<h1 className={lexend.className}>
					Hello there! I&apos;m Kacper Skowronski!
				</h1>
				{children}
			</div>
			<p>
				{article} {age} years old IT Student from Poland.
			</p>
		</section>
	);
}
