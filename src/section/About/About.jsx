import "./About.scss"
import cv from "../../assets/pdf/guillaume_debas_cv.pdf"

/**
 * About component.
 * Displays the about section of the website.
 */

function About() {
  return (
    <section className="about">
      <h2 className="about__title"><span className="floating-link" id="about"></span>
        À propos
      </h2>
      <p className="about__content">
        Issu d'une reconversion réussie, j’ai acquis de solide connaissance dans la conception et le développement d'applications Web modernes. </p>
      <p className="about__content">
        J'accorde une grande importance à bien comprendre les besoins spécifiques de chaque projet.
        La collaboration au sein d'une équipe est une facette que j'apprécie particulièrement.
        Je veille à mettre en place des solutions accessibles et maintenables, tout en préservant la performance des projets.</p>
      <p className="about__content">
        Passionné et créatif, je suis animé par la volonté de contribuer activement à la création du monde numérique de demain.
        Si vous recherchez un développeur Web avec ces valeurs, contactez-moi.
      </p>
      <a href={cv} target="_blank" className="about__cv">Télécharger mon CV</a>
    </section>
  )
}

export default About