import CustomLink from "./customLink";
import styles from "./styles/links.module.scss";

export default function Links() {
  return (
    <section className={styles.sec}>
      <CustomLink
        icon="/linkedin.svg"
        link="https://www.linkedin.com/in/kacper-skowro%C5%84ski-854424230/"
        alt="LinkedIn link"
      />
      <CustomLink
        icon="/github.svg"
        link="https://github.com/PandaHajs"
        alt="github link"
      />
    </section>
  );
}
