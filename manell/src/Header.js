import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="./static/logo.png"
        alt="logo"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__option1">hello, sign in</span>
        </div>
        <div className="header__option">
          <span className="header__option1">Sell on manell</span>
        </div>
        <div className="header__option">
          <span className="header__option1">blogs</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
