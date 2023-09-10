import "./Hero.scss"
import photo from "../../assets/photo-guillaume-debas.png"
import Photo from "../../components/Photo/Photo"

/**
 * About component.
 * Displays the about section of the website.
 */

function Hero() {
  return (
    <section className="hero">
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