import { useState } from "react"
import Modal from "../Modal/Modal"
import "./LegalInformation.scss"


/**
 * ProjectItem component.
 * Displays a project item with title, cover image, and a link to the project sheet.
 *
 * Props:
 * - title: the title of the project item.
 * - cover: the URL of the cover image for the project item.
 * - id: the unique identifier of the project item.
 */
function LegalInformation() {
  const [openModal, setOpenModal] = useState(false)
  const testOpen = () => {
    setOpenModal(true)
    console.log('ok')
  };



  return (
    <div className="pp">
      <button className="ppproject__btn" onClick={testOpen}
    >
     Mentions Légales
    </button>
     {openModal && <Modal setOpenModal={setOpenModal}  contentType="LegalInformation"/>}
     </div>
  )
}

export default LegalInformation