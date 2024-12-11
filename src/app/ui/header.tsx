import Link from "next/link";
import styles from "./styles/header.module.scss";

export default function Header() {
	return (
		<header className={styles.header}>
			<p>Logo</p>
			<nav className={styles.nav}>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/projects">Projects</Link>
			</nav>
		</header>
	);
}
