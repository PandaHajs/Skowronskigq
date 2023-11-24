import Divider from "./ui/divider";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Divider>
        <section className={styles.text}>
          <div className={styles.top}>
            <h1>Hello there!</h1>
            <p>placeholder</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida
            ac ipsum id posuere. Pellentesque lobortis elit dui, vel venenatis
            nisi viverra vel. Maecenas a libero et quam congue luctus id vitae
            tortor. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Nullam nec dictum lacus. In a egestas risus. Curabitur
            volutpat augue at pulvinar consectetur. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Fusce
            eget semper dui. Etiam nec sodales est, nec finibus quam. Quisque
            massa lacus, varius sed eleifend quis, congue a sapien. Integer nec
            ligula et neque faucibus blandit sit amet sed dui. Etiam venenatis
            nisi eu sapien consequat malesuada. Duis sodales massa quis accumsan
            pulvinar. Quisque ut lorem eget tellus semper laoreet id sed nunc.
            Aenean venenatis, nulla et viverra fermentum, augue eros laoreet
            purus, tincidunt hendrerit tellus est a est.
          </p>
        </section>
      </Divider>
    </main>
  );
}
