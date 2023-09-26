import { useState } from "react"
import Modal from "../Modal/Modal"
import "./ProjectItem.scss"

/**
 * ProjectItem component.
 * Displays a project item with title, cover image, and a link to the project sheet.
 *
 * Props:
 * - title: the title of the project item.
 * - cover: the URL of the cover image for the project item.
 * - id: the unique identifier of the project item.
 */
function ProjectItem({ project }) {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="project">
      <button className="project__btn" onClick={() => {
      setOpenModal(true)
    }}
    >
      <p className="project__btn__title">{project.title}</p>
      <img className="project__btn__background" src={project.cover} alt={`Illustration du projet :${project.title}`}   />
    </button>
     {openModal && <Modal setOpenModal={setOpenModal}  project={project} contentType="project"/>}
     </div>
  )
}

export default ProjectItem