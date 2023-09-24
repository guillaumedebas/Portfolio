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
    }, 101)

    if (!isMenuOpen) {
      setIsMenuOpen(!isMenuOpen)
      setTimeout(() => {
        setIsActiveMenu(true)
      }, 101)
    } else {
      setTimeout(() => {
        setIsMenuOpen(!isMenuOpen)
        setTimeout(() => {
          setIsActiveMenu(true)
        }, 21)
      }, 1001)
    }
  }

  const hideMenu = () => {
    const menuElement = document.querySelector('.menu');
    if (menuElement) {
      menuElement.classList.add('no-display');
    }
   
    setTimeout(() => {
      toggleMenu()
      setTimeout(() => {
        menuElement.classList.remove('no-display')
      }, 1000)

    }, 1000)
  };


  return (
    <header>
      <nav className="navbar">
        <a href="#" className="navbar__avatar">
          <Photo />
        </a>
        <ul className="menu--desktop">
          <li key="link1" ><a href="#about">À propos<span className="underline-effect"></span></a></li>
          <li key="link2"><a href="#technology">Technologies<span className="underline-effect"></span></a></li>
          <li key="link3"><a href="#project">Projets<span className="underline-effect"></span></a></li>
          <li key="link4"><a href="#contact">Contact<span className="underline-effect"></span></a></li>
        </ul>
        <button className={`${isMenuOpenIcon ? "cross" : "hamburger"} ${isActive ? "active" : ""}`} onClick={toggleMenu}>.</button>


      </nav>

      {isMenuOpen && (

        <div className="menu">
          <ul className={`${isActiveMenu ? "active" : ""}`}>
            <li key="link1" ><a href="#about" onClick={hideMenu}>À propos</a></li>
            <li key="link2" ><a href="#technology" onClick={hideMenu}>Technologies</a></li>
            <li key="link3" ><a href="#project" onClick={hideMenu}>Projets</a></li>
            <li key="link4" ><a href="#contact" onClick={hideMenu}>Contact</a></li>
          </ul>
        </div>

      )}
    </header>
  )
}

export default Header