import "./ProjectList.scss"
import projects from "../../datas/projects.json"
import ProjectItem from "../ProjectItem/ProjectItem"

/**
 * ProjectList component.
 * Displays the list of the project in project section.
 */

function ProjectList() {
  return (
    <section key="ProjectList" className="project-list">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </section>
  )
}

export default ProjectList