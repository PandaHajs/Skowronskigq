import React from "react";
import NavLinks from "./nav_links";

export default function Header() {
  return (
    <header>
      <NavLinks URL="/" title="Home" />
      <NavLinks URL="/about" title="About" />
    </header>
  );
}
