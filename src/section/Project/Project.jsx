import ProjectList from "../../components/ProjectList/ProjectList"
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
      </section>
  )
}

export default Project