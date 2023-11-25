"use client";
import { useEffect, useState } from "react";
import styles from "./styles/splashes.module.scss";
const names = [
  "An IT Student",
  "Kac Biznesu",
  "Just some random guy",
  "The perfect victim",
  "A beloved boyfriend",
  "A guy who has no idea what he's doing",
  "All hands to battle stations!",
  "General Kenobi",
];

function getSplash(): string {
  return names[Math.floor(Math.random() * names.length)];
}

export default function Splash() {
  const [splash, setSplash] = useState<string>("...");
  const [isTransition, setIsTransition] = useState<boolean>(false);

  function clickSplash(setSplash: (s: string) => void) {
    setTimeout(() => {
      setIsTransition(false);
    }, 400);
    setTimeout(() => {
      setSplash(getSplash());
    }, 100);
    setTimeout(() => {
      setIsTransition(true);
    }, 100);
  }

  useEffect(() => {
    setSplash(getSplash());
    setIsTransition(true);
    setTimeout(() => {
      setIsTransition(false);
    }, 400);
  }, []);

  return (
    <p
      className={isTransition ? styles.animate : styles.hide}
      onClick={() => clickSplash(setSplash)}
    >
      {splash}
    </p>
  );
}
