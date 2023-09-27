import "./Hero.scss"
import Photo from "../../components/Photo/Photo"

/**
 * Hero component.
 * Displays the hero section of the website.
 */

function Hero() {
  return (
    <section className="hero"><span className="floating-link" id="start"></span>
     <h1 className="hero__name">
      Guillaume Debas,
      </h1>
      <h2 className="hero__job">Développeur Web.</h2>
      
     <div className="hero__avatar">
     <Photo />
     </div>
     <p className="hero__subtitle">Bienvenue, sur mon portfolio</p>
    </section>
  )
}

export default Hero