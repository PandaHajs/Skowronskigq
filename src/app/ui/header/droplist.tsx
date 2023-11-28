import NavLinks from "./nav_links";
import styles from "@/app/ui/styles/header.module.scss";

export default function DropList({ class_name }: { class_name: string }) {
  return (
    <ul className={class_name}>
      <NavLinks URL="/" title="Home" />
      <NavLinks URL="/about" title="About" />
    </ul>
  );
}
