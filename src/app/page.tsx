import Divider from "./ui/divider";
import styles from "./page.module.scss";
import { getMyAge, getMyArticle } from "./lib/age";
import { lexend } from "./lib/fonts";
import Splash from "./ui/splashes";
import Links from "./ui/links";

export default function Home() {
	const age: number = getMyAge();
	const article: string = getMyArticle();
	return (
		<main>
			<Divider>
				<section className={styles.text}>
					<div className={styles.top}>
						<h1 className={lexend.className}>
							Hello there! I&apos;m Kacper Skowronski!
						</h1>
						<Splash />
					</div>
					<p>
						{article} {age} years old IT Student from Poland.
					</p>
				</section>
				<Links />
			</Divider>
		</main>
	);
}
