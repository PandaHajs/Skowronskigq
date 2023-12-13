"use client";
import styles from "@/app/ui/styles/header.module.scss";
import DropList from "./droplist";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [show, setShow] = useState(false);
  const [cname, setCname] = useState(styles.btn);
  function toggleShow() {
    setShow(!show);
  }
  function toggleCname() {
    setCname(show ? styles.btn : styles.active);
  }
  return (
    <header className={styles.header}>
      <nav className={styles.navLinks}>
        <button
          className={cname}
          onClick={() => {
            toggleShow();
            toggleCname();
          }}
        >
          <Image
            src="/menu.svg"
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
