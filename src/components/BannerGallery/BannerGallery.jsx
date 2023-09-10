import React, { useState } from "react"
import "./BannerGallery.scss"

/**
 * Component for the banner gallery.
 *
 * Props:
 * - pictures: an array of image URLs to display.
 * - slogan: the text of the slogan to display.
 * - banner: a boolean indicating if the gallery is used as a banner.
 */

const BannerGallery = ({ pictures, slogan, banner }) => {
  const [currentItem, setCurrentItem] = useState(0)

  // Function to move to the next image
  const next = () => {
    setCurrentItem((currentItem + 1) % pictures.length)
  }

  // Function to move to the previous image
  const prev = () => {
    setCurrentItem((currentItem - 1 + pictures.length) % pictures.length)
  }

  // If the gallery contains only one image, display only that image
  if (pictures.length === 1) {
    return (
      <div className={`gallery ${banner ? "banner" : ""}`}>
        <div className="gallery__container">
          <img
            src={pictures[0]}
            alt="Slide 1"
            className="gallery__image active"
          />
          {slogan && <h1 className="gallery__title">{slogan}</h1>}
        </div>
      </div>
    )
  }

  // If the gallery contains multiple images, display the list of images with navigation buttons
  return (
    <div className={`gallery ${banner ? "banner" : ""}`}>
      <div className="gallery__container">
        {pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`Slide ${index + 1}`}
            className={
              index === currentItem ? "gallery__image active" : "gallery__image"
            }
          />
        ))}
      </div>
      <div className="gallery__pagination">
        {currentItem + 1} / {pictures.length}
      </div>
      <button className="gallery__prev" onClick={prev}>
        Précédent
      </button>
      <button className="gallery__next" onClick={next}>
        Suivant
      </button>
      {slogan && <h1 className="gallery__title">{slogan}</h1>}
    </div>
  )
}

export default BannerGallery
