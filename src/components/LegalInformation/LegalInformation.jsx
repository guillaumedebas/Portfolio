import { useState } from "react"
import Modal from "../Modal/Modal"
import "./LegalInformation.scss"
import LegalInformationContent from "../../modalContent/LegalInformationContent/LegalInformationContenrt"


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
  const OpenModalClick = () => {
    setOpenModal(true)
  };



  return (
    <div className="pp">
      <button className="ppproject__btn" onClick={OpenModalClick}
    >
     Mentions Légales
    </button>
     {openModal && <Modal setOpenModal={setOpenModal}  ><LegalInformationContent /> </Modal>}
     </div>
  )
}

export default LegalInformation