import "./Technology.scss"
import html5css from "../../assets/logos/html_css_logo.webp"
import saas from "../../assets/logos/sass_logo.svg"
import javascript from "../../assets/logos/javascript_logo.svg"
import react from "../../assets/logos/react_logo.svg"
import nodejs from "../../assets/logos/nodejs_logo.svg"
import expressjs from "../../assets/logos/expressjs_logo.webp"


/**
 * Technology component.
 * Displays the technology section of the website.
 */

function Technology() {
  return (
    <section className="technology" id="technology">
      <h2 className="technology__title">
        Technologies
      </h2>
      <p className="technology__description">
      J'aime donner vie à des projets avec ces technologies :
      </p>
      <div className="technology__logos">
        <div title="HTML / CSS" className="technology__logos__bubble">
          <img src={html5css} alt="Logo HTML5" className="technology__logos__bubble__img" />
        </div>
        <div title="Saas" className="technology__logos__bubble">
          <img src={saas} alt="Logo Saas" className="technology__logos__bubble__img" />
        </div>
        <div title="JavaScript" className="technology__logos__bubble jslogo">
          <img src={javascript} alt="Logo JavaScript" className="technology__logos__bubble__img" />
        </div>
        <div title="React" className="technology__logos__bubble">
          <img src={react} alt="Logo React" className="technology__logos__bubble__img" />
        </div>
        <div title="Node.js" className="technology__logos__bubble">
          <img src={nodejs} alt="Logo Node.js" className="technology__logos__bubble__img" />
        </div>
        <div title="Express.js" className="technology__logos__bubble">
          <img src={expressjs} alt="Logo express" className="technology__logos__bubble__img" />
        </div>
      </div>

    </section>
  )
}

export default Technology