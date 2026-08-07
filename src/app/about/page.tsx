import type { Metadata } from "next";
import { getMyAge } from "../lib/age";
import { lexend } from "../lib/fonts";
import Divider from "../ui/divider";
import styles from "./page.module.scss";

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
						and living in Poznan, Poland. I&apos;m currently studying Computer
						Science at the University of Technology in Poznan and working as an
						IT SAP Finance Apprentice at John Deere since 04.2025. I&apos;m
						interested in programming, web development and computer science in
						general.
					</p>
				</section>
			</Divider>
		</main>
	);
}
