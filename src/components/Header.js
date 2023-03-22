import headerLogo from "../images/header.svg";
import React from "react";
import { Link, useLocation } from 'react-router-dom';

export default function Header({ isLoggedIn, email, signOut }) {

  const location = useLocation();

  return (
    <header className="header">
      <img
        className="header__image"
        src={headerLogo}
        alt="Project title- Around The U.S."
      />

      <div className="header__container">
        {isLoggedIn ? (
          <div>
            <p className="header__email">{email}</p>
            <div className="header__text">Log out</div>
          </div>
        ) : (
          <div>
            <Link to={location.pathname === "/signin" ? "/signup" : "/signin"} className="header__link"></Link>
            {location.pathname === "/signin" ? "Sign up" : "Log In"}
          </div>
        )}
      </div>
    </header>
  );
}
