import ProjectList from "../../components/ProjectList/ProjectList"
import Social from "../../components/Social/Social"
import "./Project.scss"


/**
 * Project component.
 * Displays the Project section of the website.
 */

function Project() {
  return (
    <section className="project-section">
     <h2 className="project-section__title"><span className="floating-link" id="project"></span>
        Projets
      </h2>
      <p className="project-section__text">Cliquez sur ces projets pour les découvrir en détail&nbsp;:</p>
      <ProjectList />
      <p className="project-section__text">Retrouvez mes autres projets sur ma page GitHub&nbsp;:</p>
      <Social networksToShow={['github']} /> 
      </section>
  )
}

export default Project