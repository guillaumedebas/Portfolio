import React, { useEffect, useRef, useState } from "react";
import "./Modal.scss";
import BannerGallery from "../BannerGallery/BannerGallery";
import TagList from "../TagList/TagList";

function Modal({ setOpenModal, project }) {
  const modalRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setOpenModal(false);
    }, 501);
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

    if (firstFocusableRef.current) {
      firstFocusableRef.current.focus();
    }

    document.body.classList.add("body-no-scroll");

    setTimeout(() => {
      setIsOpen(true);
    }, 100);


    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, []);



  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

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
    <dialog
      className={`modal${isOpen ? " open" : ""}`}
      aria-modal="true"
      onClick={() => closeModal()}
      ref={modalRef}
    >
      <div
        className={`modal__content${isOpen ? " open" : ""}`} // Appliquer la classe fadeOut à modal__content
        onClick={handlePropagation}
      >
        <button
          className="modal__content__close"
          aria-label="Fermer la modal"
          onClick={() => closeModal()}
        >
          Fermer la modale
        </button>

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
    </dialog>
  )
}

export default Modal