import React, { useEffect, useRef, useState } from "react";
import "./Modal.scss";

function Modal({ setOpenModal, children }) {
  const modalRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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
        className={`modal__content${isOpen ? " open" : ""}`}
        onClick={handlePropagation}
      >
        <button
          className="modal__content__close"
          aria-label="Fermer la modal"
          onClick={() => closeModal()}
        >
          Fermer la modale
        </button>

        {children}
  
      </div>
    </dialog>
  )
}

export default Modal