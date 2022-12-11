import headerLogo from "../images/header.svg";
import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header__image"
        src={headerLogo}
        alt="Project title- Around The U.S."
      />
    </header>
  );
}
