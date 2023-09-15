import "./Photo.scss"
import photo from "../../assets/photos/photo-guillaume-debas.webp"
/**
 * Photo component.
 * Display Photo element.
 */

function Photo() {
  return (
    <img src={photo} alt="Photo de Guillaume Debas" className="photo" />
  )
}

export default Photo