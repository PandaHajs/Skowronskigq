import styles from "@/app/ui/styles/footer.module.css";
import { currentYear } from "../lib/dates";

export default function Footer() {
  let year: number = currentYear();
  return (
    <footer className={styles.footer}>
      <p>copyright © {year} Kacper Skowronski </p>
    </footer>
  );
}
