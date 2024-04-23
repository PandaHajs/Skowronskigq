import { getMyAge, getMyArticle } from "../lib/age";
import styles from "@/app/page.module.scss";
import { lexend } from "../lib/fonts";

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
