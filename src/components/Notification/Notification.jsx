import "./Notification.scss"
import React, { useState, useEffect } from 'react';

function Notification({ message, type, onClose }) {
  const [isOpen, setIsOpen] = useState(false);

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