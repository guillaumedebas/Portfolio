import "./ProjectContent.scss";
import BannerGallery from "../../components/BannerGallery/BannerGallery"
import TagList from "../../components/TagList/TagList";

function ProjectContent({ project }) {
  

  return (
   
      <div>

        <div className="modal__content__header">
          <h3 className="modal__content__header__title">{project.title}</h3>
        </div>
        <div className="modal__content__body">
          <div className="modal__content__body__display display-1">
            <div className="modal__content__body__display__element">
              <BannerGallery pictures={project.pictures} />
            </div>
            <div className="modal__content__body__display__element">
              <p className="modal__content__body__display__element__label">Date de réalisation&nbsp;:
                <span className="modal__content__body__display__element__content"> {project.date}</span> </p>
              <p className="modal__content__body__display__element__label">Mission&nbsp;: </p>
              <p className="modal__content__body__display__element__content">{project.description}</p>
            </div> </div>
          <div className="modal__content__body__display display-2">
            <div className="modal__content__body__display__element">
              <p className="modal__content__body__display__element__label">Défis résolus&nbsp;: </p>
              <p className="modal__content__body__display__element__content">{project.problem}</p>
            </div>
            <div className="modal__content__body__display__element">
              <p className="modal__content__body__display__element__label">Compétences acquises&nbsp;: </p>
              <ul className="modal__content__body__display__element__content">
                {project.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          
          </div>
            <div className="modal__content__body__display display-3">
            <div className="modal__content__body__display__element">
              <p className="modal__content__body__display__element__label">Lien GitHub&nbsp;:&nbsp;
                <a href={project.github} className="modal__content__body__display__element__content">{project.github}</a> </p>
                </div>
                <div className="modal__content__body__display__element">
              <p className="modal__content__body__display__element__label technologies">Technologies utilisées&nbsp;: <span className="modal__content__body__display__element__content"> <TagList tags={project.technologies} /></span></p>
            </div>
            </div>
        </div>

      </div>
     
  )
}

export default ProjectContent