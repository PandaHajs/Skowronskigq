import styles from "./styles/mainPart.module.scss";
export default function MainPart() {
	return (
		<div className={styles.main}>
			<h1>Hello there, I&apos;m Kacper Skowroński</h1>
			<p>A featherless biped trying to figure out his place in the universe</p>
			<p>
				I also do some web programming, check out my work either on the projects
				page or through links below
			</p>
		</div>
	);
}
