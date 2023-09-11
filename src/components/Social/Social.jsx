import "./Social.scss";
import githubLogo from "../../assets/github-logo.svg";
import linkedinLogo from "../../assets/linkedin-logo.svg";

/**
 * Social component.
 * Displays Social elements.
 */

function Social({ networksToShow }) {
  const showGitHub = networksToShow.includes('github');
  const showLinkedIn = networksToShow.includes('linkedin');

  return (
    <div className="social">
      {showGitHub && <img className="social__logo" src={githubLogo} alt="GitHub" />}
      {showLinkedIn && <img className="social__logo" src={linkedinLogo} alt="LinkedIn" />}
    </div>
  );
}

export default Social;