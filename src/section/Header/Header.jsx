// Header.js
import "./Header.scss";
import Photo from "../../components/Photo/Photo";
import React from 'react';
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <a href="#start" className="navbar__avatar">
          <Photo />
        </a>
        <NavigationMenu />
      </nav>
    </header>
  )
}

export default Header;
