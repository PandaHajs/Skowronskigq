import Divider from "./ui/divider";
import NavLinks from "./ui/header/nav_links";
import styles from "@/app/ui/styles/not-found.module.scss";

export default function NotFound() {
  return (
    <main>
      <Divider>
        <section className={styles.sec}>
          <h1 className={styles.text}>
            Oops! Seems like this page doesn&apos;t exist.
          </h1>
          <div className={styles.btn}>
            <NavLinks URL={"/"} title={"Go back"} />
          </div>
        </section>
      </Divider>
    </main>
  );
}
