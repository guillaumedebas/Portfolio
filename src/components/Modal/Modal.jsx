import React, { useEffect, useRef } from "react"
import "./Modal.scss"
import BannerGallery from "../BannerGallery/BannerGallery";
import TagList from "../TagList/TagList";


function Modal({ setOpenModal, project }) {
  const modalRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setOpenModal(false);
    } else if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableRef.current) {
          e.preventDefault();
          lastFocusableRef.current.focus();
        }
      } else {
        if (document.activeElement === lastFocusableRef.current) {
          e.preventDefault();
          firstFocusableRef.current.focus();
        }
      }
    }
  };

  const handlePropagation = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const focusableElements = modalRef.current.querySelectorAll(
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
    );
    firstFocusableRef.current = focusableElements[0];
    lastFocusableRef.current = focusableElements[focusableElements.length - 1];

    // Mettre automatiquement le focus sur le premier élément focusable à l'ouverture
    if (firstFocusableRef.current) {
      firstFocusableRef.current.focus();
    }

    // Ajouter la classe pour désactiver le défilement du corps
    document.body.classList.add("body-no-scroll");

    return () => {
      // Supprimer la classe pour réactiver le défilement du corps
      document.body.classList.remove("body-no-scroll");
    };


  }, []);


  useEffect(() => {
    // Ajouter le gestionnaire d'événement à la fenêtre quand le composant est monté
    window.addEventListener("keydown", handleKeyDown);

    // Nettoyer le gestionnaire d'événement quand le composant est démonté
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const focusableElements = modalRef.current.querySelectorAll(
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
    );
    firstFocusableRef.current = focusableElements[0];
    lastFocusableRef.current = focusableElements[focusableElements.length - 1];
  }, []);


  return (
    <dialog className="modal" aria-modal="true" onClick={() =>
      setOpenModal(false)
    }
      ref={modalRef}
    >
      <div className="modal__content" onClick={handlePropagation}>
        <button className="modal__content__close" aria-label="Fermer la modal" onClick={() =>
          setOpenModal(false)
        }
        >
          Fermer la modale
        </button>

        <div className="modal__content__header">
          <h3 className="modal__content__header__title">{project.title}</h3>
        </div>
        <div className="modal__content__body">
          <div className="modal__content__body__display">
            <div className="modal__content__body__display__element">
              <BannerGallery pictures={project.pictures} />
            </div>
            <div className="modal__content__body__display__element">
              <p className="modal__content__body__display__element__label">Date de réalisation :
                <span className="modal__content__body__display__element__content"> {project.date}</span> </p>
              <p className="modal__content__body__display__element__label">Mission : </p>
              <p className="modal__content__body__display__element__content">{project.description}</p>
            </div> </div>
          <div className="modal__content__body__display">
            <div className="modal__content__body__display__element">
              <p className="modal__content__body__display__element__label">Défis résolus : </p>
              <p className="modal__content__body__display__element__content">{project.problem}</p>
            </div>
            <div className="modal__content__body__display__element">
              <p className="modal__content__body__display__element__label">Compétences acquises : </p>
              <ul className="modal__content__body__display__element__content">
                {project.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          
          </div>
            <div className="modal__content__body__display">
            <div className="modal__content__body__display__element">
              <p className="modal__content__body__display__element__label">Lien GitHub :&nbsp;
                <a href={project.github} className="modal__content__body__display__element__content">{project.github}</a> </p>
                </div>
                <div className="modal__content__body__display__element">
              <p className="modal__content__body__display__element__label technologies">Technologies utilisées : <span className="modal__content__body__display__element__content"> <TagList tags={project.technologies} /></span></p>
            </div>
            </div>
        </div>
      </div>
    </dialog>
  )
}

export default Modal