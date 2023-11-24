import { getMyAge } from "../lib/dates";
import Divider from "../ui/divider";
import styles from "./page.module.css";

export default function Home() {
  let age: number = getMyAge();
  return (
    <main>
      <Divider>
        <div className={styles.text}>
          <h1>About me</h1>
          <p>
            I was born on [REDACTED] in 2004, I&apos;m currently {age} years old
            and living in Poznan, Poland. At this point in time I have only
            primary education and finished more than half of my High School. I
            have the CISCO ITE 5.0 certificate and succesfully underwent the
            CISCO CCNA1 course (I&apos;m not certified tho). I&apos;m not yet
            sure what I want to do in life, but I&apos;m certain it will either
            be something in networking or web development.
          </p>
        </div>
      </Divider>
    </main>
  );
}
