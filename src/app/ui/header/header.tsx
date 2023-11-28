"use client";
import styles from "@/app/ui/styles/header.module.scss";
import DropList from "./droplist";
import { useState } from "react";
import Image from "next/image";
import menu from "@/public/menu.svg";

export default function Header() {
  const [show, setShow] = useState(false);
  function toggleShow() {
    setShow(!show);
  }
  return (
    <header className={styles.header}>
      <nav className={styles.navLinks}>
        <button className={styles.btn} onClick={toggleShow}>
          <Image
            src={menu}
            width={40}
            height={40}
            alt="The dropdown menu button"
          />
        </button>
        <DropList class_name={show ? styles.show : styles.hidden} />
      </nav>
    </header>
  );
}
