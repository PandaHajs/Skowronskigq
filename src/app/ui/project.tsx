import Link from "next/link";
import { lexend } from "../lib/fonts";
import styles from "./styles/projects.module.scss";

type projectProps = {
	title: string;
	link: string;
	description: string;
	feautred: boolean;
};

export default function Project(props: projectProps) {
	return (
		<Link href={props.link}>
			<div className={props.feautred ? styles.featured : styles.project}>
				<h2 className={lexend.className}>{props.title}</h2>
				<p>{props.description}</p>
			</div>
		</Link>
	);
}
