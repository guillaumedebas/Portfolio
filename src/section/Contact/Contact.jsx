import React, { useState, useEffect } from 'react';
import mail from "../../assets/icons/mail.svg";
import './Contact.scss';
import Notification from '../../components/Notification/Notification';

/**
 * Contact component for a contact form.
 *
 * This component allows users to submit messages via a contact form and displays notifications.
 */

export default function Contact() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Subject, setSubject] = useState('');
  const [Message, setMessage] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Function to close the notification message
  const closeNotification = () => {
    setShowNotification(false);
    setNotificationMessage('');
    setNotificationType('');
  };


  // Function to display a success notification message
  const onSuccess = message => {
    setNotificationMessage(message);
    setNotificationType('success');
  };

  // Function to display an error notification message
  const onError = message => {
    setNotificationMessage(message);
    setNotificationType('error');
  };

  // Effect to handle the display of notification messages and auto-dismiss success messages
  useEffect(() => {
    if (notificationMessage && notificationType === 'success') {
      setShowNotification(true);
      const timer = setTimeout(closeNotification, 3500);

      return () => clearTimeout(timer)
    }
  }, [notificationMessage, notificationType]);

// Function to handle form submission
  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    const formEle = document.querySelector('form');
    const formDatab = new FormData(formEle);

        // Send a POST request with the form data
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbyj7qHrSaal3RY6aYJi9-OVodmJy5N9dqzoM5igXaBOahhLYadojnxX4MtQs_GTpuJrZw/exec',
        {
          method: 'POST',
          body: formDatab,
        }
      );
      onSuccess('Message envoyé avec succès');
      setFirstName('');
      setLastName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (e) {
      onError('Une erreur s\'est produite lors de l\'envoi du message');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact">
      <div className="contact__message">
        <h2 className="contact__message__title">Contact</h2>
        <span className="floating-link" id="contact"></span>
        <p className="contact__message__content">Contactez-moi via ce formulaire</p>
        <img src={mail} alt="animation email" className='contact__message__mail'/>

        {showNotification && (
          <Notification
            message={notificationMessage}
            type={notificationType}
            onClose={closeNotification}
          />
        )}
      </div>

      <form className="contact__main__form" onSubmit={handleSubmit}>
        <div className="contact__main__form__identity">
          <div className="contact__main__form__identity__first-name">
            <label
              className="contact__main__form__identity__first-name__label"
              htmlFor="FirstName"
            >
              Prénom :
            </label>
            <input
              className="contact__main__form__identity__first-name__input"
              type="text"
              id="FirstName"
              name="FirstName"
              required
              value={FirstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="contact__main__form__identity__last-name">
            <label
              className="contact__main__form__identity__last-name__label"
              htmlFor="LastName"
            >
              Nom :
            </label>
            <input
              className="contact__main__form__identity__last-name__input"
              type="text"
              id="LastName"
              name="LastName"
              required
              value={LastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="contact__main__form__email">
          <label
            className="contact__main__form__email__label"
            htmlFor="Email"
          >
            Email :
          </label>
          <input
            className="contact__main__form__email__input"
            type="email"
            id="Email"
            name="Email"
            required
            value={Email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="contact__main__form__subject">
          <label
            className="contact__main__form__subject__label"
            htmlFor="Subject"
          >
            Sujet :
          </label>
          <input
            className="contact__main__form__subject__input"
            type="text"
            id="Subject"
            name="Subject"
            required
            value={Subject}
            onChange={e => setSubject(e.target.value)}
          />
        </div>
        <div className="contact__main__form__message">
          <label
            className="contact__main__form__message__label"
            htmlFor="Message"
          >
            Votre message :
          </label>
          <textarea
            className="contact__main__form__message__textarea"
            id="Message"
            name="Message"
            rows="4"
            required
            value={Message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>
        <button
          className={`contact__main__form__submit-btn ${isLoading ? 'loading' : ''}`}
          type="submit"
          id="submitButton"
          disabled={isLoading}
        >
          {isLoading ? <span className="spinner"></span> : 'Envoyer mon message'}
        </button>
      </form>
    </section>
  );
}
