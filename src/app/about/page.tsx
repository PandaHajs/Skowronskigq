import { getMyAge } from "../lib/age";
import Divider from "../ui/divider";
import styles from "./page.module.scss";
import { lexend } from "../lib/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
};

export default function Home() {
	const age: number = getMyAge();
	return (
		<main>
			<Divider>
				<section className={styles.text}>
					<h1 className={lexend.className}>About me</h1>
					<p>
						I was born on [REDACTED] in 2004, I&apos;m currently {age} years old
						and living in Poznan, Poland. I&apos;ve recently finished High
						School and I&apos;m currently studying Computer Science at the
						University of Technology in Poznan. I&apos;m a self-taught web
						developer and I hope to make a career out of it.
					</p>
				</section>
			</Divider>
		</main>
	);
}
