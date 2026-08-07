import Link from "next/link";
import styles from "@/app/ui/styles/header.module.scss";

export default function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.navLinks}>
				<Link href="/">Home</Link>
				<Link href="/projects">Projects</Link>
				<Link href="/about">About</Link>
			</nav>
		</header>
	);
}
