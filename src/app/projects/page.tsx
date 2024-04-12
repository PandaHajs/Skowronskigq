import Divider from "../ui/divider";
import styles from "./page.module.scss";
import { lexend } from "../lib/fonts";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Projects",
};
export default function Home() {
	return (
		<Divider>
			<div className={styles.styles}>
				<Link href="https://snake.skowronski.one/" target="_blank">
					<section className={styles.featured}>
						<h2 className={lexend.className}>Simple Snake</h2>
						<p>
							A simple snake game created with React, TypeScript and SASS
							(.scss) using the Next.JS framework.
						</p>
					</section>
				</Link>
				<section className={styles.projects}>
					<Link href="/">
						<div className={styles.project}>
							<h2 className={lexend.className}>Skowronski.one</h2>
							<p>
								My personal website, made using React, TS, SASS and the Next.JS
								framework.
							</p>
						</div>
					</Link>
					<div className={styles.project}>
						<h2 className={lexend.className}>Placeholder</h2>
						<p>Placeholder</p>
					</div>
					<div className={styles.project}>
						<h2 className={lexend.className}>Placeholder</h2>
						<p>Placeholder</p>
					</div>
					<div className={styles.project}>
						<h2 className={lexend.className}>Placeholder</h2>
						<p>Placeholder</p>
					</div>
				</section>
			</div>
		</Divider>
	);
}
