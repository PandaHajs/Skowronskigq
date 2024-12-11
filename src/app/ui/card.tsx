import styles from "./styles/card.module.scss";
import NowPlaying from "./nowPlaying/nowPlaying";
import Avatar from "./avatar";
import MainPart from "./mainPart";
export default function Card() {
  return (
    <section className={styles.card}>
      <div className={styles.area1}>
        <NowPlaying />
      </div>
      <div className={styles.area2}>
        <Avatar />
      </div>
      <div className={styles.area3}>
        <MainPart />
      </div>
    </section>
  );
}
