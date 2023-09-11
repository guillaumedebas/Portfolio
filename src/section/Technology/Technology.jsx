import "./Technology.scss"
import html5css from "../../assets/html_css_logo.png"
import saas from "../../assets/sass_logo.svg"
import javascript from "../../assets/javascript_logo.svg"
import react from "../../assets/react_logo.svg"
import nodejs from "../../assets/nodejs_logo.svg"
import expressjs from "../../assets/expressjs_logo.png"


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
      J'aime donner vie à des idées avec ces technologies :
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
          <img src={react} alt="Logo HTML5" className="technology__logos__bubble__img" />
        </div>
        <div title="Node.js" className="technology__logos__bubble">
          <img src={nodejs} alt="Logo Node.js" className="technology__logos__bubble__img" />
        </div>
        <div title="Express.js" className="technology__logos__bubble">
          <img src={expressjs} alt="Logo HTML5" className="technology__logos__bubble__img" />
        </div>
      </div>

    </section>
  )
}

export default Technology