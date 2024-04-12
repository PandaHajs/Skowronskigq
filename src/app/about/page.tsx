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
						and living in Poznan, Poland. At this point in time I have only
						primary education and finished more than half of my High School. I
						have the CISCO ITE 5.0 certificate and succesfully underwent the
						CISCO CCNA1 course (I&apos;m not certified tho). I&apos;m not yet
						sure what I want to do in life, but I&apos;m certain it will either
						be something in networking or web development.
					</p>
				</section>
			</Divider>
		</main>
	);
}
