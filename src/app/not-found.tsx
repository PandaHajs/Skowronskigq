import Link from "next/link";
import styles from "@/app/ui/styles/not-found.module.scss";
import Divider from "./ui/divider";

export default function NotFound() {
	return (
		<main>
			<Divider>
				<section className={styles.sec}>
					<h1 className={styles.text}>
						Oops! Seems like this page doesn&apos;t exist.
					</h1>
					<div className={styles.btn}>
						<Link href="/">Go back</Link>
					</div>
				</section>
			</Divider>
		</main>
	);
}
