import "./Social.scss";
import githubLogo from "../../assets/logos/github-logo.svg";
import linkedinLogo from "../../assets/logos/linkedin-logo.svg";

/**
 * Social component.
 * Displays Social elements.
 */

function Social({ networksToShow }) {
  const showGitHub = networksToShow.includes('github');
  const showLinkedIn = networksToShow.includes('linkedin');

  return (
    <div className="social">
      {showGitHub && (
        <a href="https://github.com/guillaumedebas" target="_blank">
          <img className="social__logo" src={githubLogo} alt="GitHub" />
        </a>
      )}
      {showLinkedIn && (
        <a href="https://fr.linkedin.com/in/guillaume-debas-612997150/" target="_blank">
          <img className="social__logo" src={linkedinLogo} alt="LinkedIn" />
        </a>
      )}
    </div>
  );
}

export default Social;
