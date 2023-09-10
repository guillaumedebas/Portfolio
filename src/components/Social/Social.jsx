import "./Social.scss"
import githubLogo from "../../assets/github-logo.svg"
import linkedinLogo from "../../assets/linkedin-logo.svg"
/**
 * Social component.
 * Displays Social elements.
 */

function Social() {
  return (
     <div className="social">
     <img className="social__logo" src={githubLogo} />
     <img className="social__logo" src={linkedinLogo} />
     </div>
  )
}

export default Social