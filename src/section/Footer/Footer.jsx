import Social from "../../components/Social/Social"
import "./Footer.scss"

/**
 * Footer component.
 * Displays the footer section of the website.
 */

function Footer() {
  return (
    <footer className="footer">
     <p className="footer__text">Réalisé par Guillaume Debas</p>
     <Social networksToShow={['github', 'linkedin']} /> 
    </footer>
  )
}

export default Footer