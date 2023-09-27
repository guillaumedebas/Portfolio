import "./Notification.scss"
import React, { useState, useEffect } from 'react';

/**
 * Component for displaying notifications with specified messages and types.
 *
 * @param {string} message - The message to display in the notification.
 * @param {string} type - The type of notification (e.g., "success", "error").
 * @param {function} onClose - A callback function to close the notification.
 */

function Notification({ message, type, onClose }) {
    // State variable to control the visibility of the notification
  const [isOpen, setIsOpen] = useState(false);

    // Use useEffect to handle the timing of notification display and closure
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);

    const timer = setTimeout(() => {
      setIsOpen(false);
      onClose();
    }, 3500);

    // Clean up by clearing the timer when the component unmounts or when "onClose" changes
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`notification ${type} ${isOpen ? " open" : ""}`}>
      <button
        className="notification__close"
        aria-label="Fermer la notification"
        onClick={onClose}
      >
        Fermer la notification
      </button>
      <p className='notification__message'>{message}</p>
    </div>
  );
}

export default Notification