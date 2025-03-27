import React from "react";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Tasks</h1>

      <ThemeToggle />
    </header>
  );
}

export default Header;
