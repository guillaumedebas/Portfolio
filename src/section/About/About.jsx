import "./About.scss"
import Social from "../../components/Social/Social"
/**
 * About component.
 * Displays the about section of the website.
 */

function About() {
  return (
    <section className="about">
      <h2 className="about__title">
        À propos
      </h2>
     <p className="about__content">
     Issu d'une reconversion réussie, j’ai acquis de solide connaissance dans la conception et le développement d'applications Web modernes.
     </p>
     <p className="about__content">
     Passionné et créatif, je suis animé par la volonté de contribuer activement à la création du monde numérique de demain.
     </p>
     <Social />
    </section>
  )
}

export default About