import React from 'react';
import './contact.css';
import contactImg from './Images/contact.jpeg';
import tgIcon from './Images/tg.svg';
import mailIcon from './Images/mail.svg';

const Contact = () => {
  const contactHeading = 'CONTACT';
  const contactSubheading = 'Don\'t be shy!';
  const emailText = 'vottema97@gmail.com';
  const telegramText = 'https://t.me/vottema';

  const handleTelegramClick = () => {
    window.open(telegramText);
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact">
        <div className="contact-text">
          <h5>{contactHeading}</h5>
          <h3>{contactSubheading}</h3>
        </div>
        <div className="my-contact">
          <div className="photo-contact"><img src={contactImg} alt="" /></div>
          <div className="my-contacts">
            <p className='mail-contact'><img src={mailIcon} alt="" /> {emailText}</p>
            <p className='tg-contact' onClick={handleTelegramClick}><img src={tgIcon} alt="" /> {telegramText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
