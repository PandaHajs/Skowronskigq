import Divider from "./ui/divider";
import styles from "./page.module.scss";
import { getMyAge, getMyArticle } from "./lib/age";
import { lexend } from "./lib/fonts";
import Splash from "./ui/splashes";

export default function Home() {
  let age: number = getMyAge();
  let article: string = getMyArticle();
  return (
    <main>
      <Divider>
        <section className={styles.text}>
          <div className={styles.top}>
            <h1 className={lexend.className}>
              Hello there! I&apos;m Kacper Skowronski!
            </h1>
            <Splash />
          </div>
          <p>
            {article} {age} years old IT Student from Poland, with the life
            motto &quot;If I don&apos;t have to do it, I won&apos;t. If I have
            to do it, I&apos;ll make it quick.&quot; who for some reason made
            this site without having to.
          </p>
        </section>
      </Divider>
    </main>
  );
}
