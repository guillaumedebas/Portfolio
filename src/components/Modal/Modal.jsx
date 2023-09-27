import React, { useEffect, useRef, useState } from "react";
import "./Modal.scss";

/**
 * Component for a modal dialog.
 *
 * @param {Function} setOpenModal - A function to control the visibility of the modal.
 * @param {ReactNode} children - The content to be displayed inside the modal.
 */

function Modal({ setOpenModal, children }) {
    // Refs for DOM elements and state management
  const modalRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

   // Function to handle keyboard events (Escape key and Tab key)
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

  // Function to close the modal with a fade-out effect
  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setOpenModal(false);
    }, 501);
  };


  // Function to stop event propagation to prevent clicks within the modal from closing it
  const handlePropagation = (e) => {
    e.stopPropagation();
  };

  // Effect to set up initial focus and disable scrolling on the body
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


 // Effect to add and remove event listeners for keyboard interactions
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

    // Effect to set focusable elements when the modal content changes
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