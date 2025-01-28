import Link from "next/link";
import { lexend } from "../lib/fonts";
import styles from "./styles/projects.module.scss";

type projectProps = {
  title: string;
  link: string;
  description: string;
};

export default function Project(props: projectProps) {
  return (
    <Link href={props.link}>
      <div className={styles.project}>
        <h3 className={lexend.className}>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </Link>
  );
}
