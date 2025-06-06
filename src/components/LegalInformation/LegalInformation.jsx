import { useState } from "react"
import Modal from "../Modal/Modal"
import "./LegalInformation.scss"
import LegalInformationContent from "../../modalContent/LegalInformationContent/LegalInformationContent"


/**
 * LegalInformation component.
 * Displays a button to access at the Legal Information.
 **/
function LegalInformation() {
  const [openModal, setOpenModal] = useState(false)
  const OpenModalClick = () => {
    setOpenModal(true)
  };



  return (
    <div className="legal-information">
      <button className="legal-information__btn" onClick={OpenModalClick}
    >
     Mentions Légales
    </button>
     {openModal && <Modal setOpenModal={setOpenModal}  ><LegalInformationContent /> </Modal>}
     </div>
  )
}

export default LegalInformation