import Link from "./link";
import styles from "./styles/links.module.scss";
import linkedin from "@/public/linkedin.svg";
import github from "@/public/github.svg";

export default function Links() {
  return (
    <section className={styles.sec}>
      <Link
        icon={linkedin}
        link="https://www.linkedin.com/in/kacper-skowro%C5%84ski-854424230/"
        alt="LinkedIn link"
      />
      <Link
        icon={github}
        link="https://github.com/PandaHajs"
        alt="github link"
      />
    </section>
  );
}
