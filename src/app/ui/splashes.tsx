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
function clickSplash(setSplash: (s: string) => void) {
  setSplash(getSplash());
}

export default function Splash() {
  const [splash, setSplash] = useState<string>("...");
  const [isTransition, setIsTransition] = useState(false);
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
