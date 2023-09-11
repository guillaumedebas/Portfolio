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
     <h2 className="project-section__title">
        Projets
      </h2>
      <ProjectList />
      <p>Retouvez d'autres projets sur mon GitHub : </p>
      <Social networksToShow={['github']} /> 
      </section>
  )
}

export default Project