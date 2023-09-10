import "./Header.scss"
import Photo from "../../components/Photo/Photo"
import React, { useState } from 'react';



/**
 * Hearder component.
 * Displays the header section of the website.
 */

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpenIcon, setIsMenuOpenIcon] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [isActiveMenu, setIsActiveMenu] = useState(true);

  const toggleMenu = () => {
    setIsActiveMenu(false)
      setIsActive(false)
    setTimeout(() => {
      setIsMenuOpenIcon(!isMenuOpenIcon)
      setIsActive(true)
    }, 201)

    if (!isMenuOpen) {
      setIsMenuOpen(!isMenuOpen)
      setTimeout(() => {
        setIsActiveMenu(true)
      }, 21)
    } else {
      setTimeout(() => {
        setIsMenuOpen(!isMenuOpen)
        setTimeout(() => {
          setIsActiveMenu(true)
        }, 21)
      }, 1001)
    }
  }


  return (
    <header>
      <nav className="navbar">
        <a href="#" className="navbar__avatar">
          <Photo />
        </a>

        <button className={`${isMenuOpenIcon ? "cross" : "hamburger"} ${isActive ? "active" : ""}`} onClick={toggleMenu}>X</button>


      </nav>

      {isMenuOpen && (
        <div className="menu">
          <ul  className={`${isActiveMenu ? "active" : ""}`}>
            <li key="link1"><a href="#">À propos</a></li>
            <li key="link2"><a href="#">Technologies</a></li>
            <li key="link3"><a href="#">Projets</a></li>
            <li key="link4"><a href="#">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header