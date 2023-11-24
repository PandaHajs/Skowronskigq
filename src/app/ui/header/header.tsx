import styles from "@/app/ui/styles/header.module.scss";
import NavLinks from "./nav_links";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navLinks}>
        <NavLinks URL="/" title="Home" />
        <NavLinks URL="/about" title="About" />
      </nav>
    </header>
  );
}
