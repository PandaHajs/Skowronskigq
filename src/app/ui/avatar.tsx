import Image from "next/image";
import styles from "./styles/avatar.module.scss";

export default function Avatar() {
  return (
    <div className={styles.avatar}>
      <Image
        src="https://placewaifu.com/image/200"
        alt="placeholder"
        width={50}
        height={50}
      />
    </div>
  );
}
