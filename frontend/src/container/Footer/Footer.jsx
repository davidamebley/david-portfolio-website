import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { input, value } = e.target;

    setFormData({ ...formData, [input]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = { // following Sanity's guidelines
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <>
      <h2 className="head-text">Connect With Me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:davameb@gmail.com" className='p-text'>davameb@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel: +358 (468) 440-726" className='p-text'>+358468440726</a>
        </div>
      </div>

      {
        !isFormSubmitted ?
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input className='p-text' type="text" name='name' placeholder='Your Full Name' value={name} onChange={handleChangeInput} />
            </div>
            <div className="app__flex">
              <input className='p-text' type="email" name='email' placeholder='Your Email' value={email} onChange={handleChangeInput} />
            </div>
          </div>
          :
          <div>
            <h3 className="head-text">Thank you. Your message has been sent.</h3>
          </div>
      }
      <div>
        <textarea
          name={message}
          id={message}
          cols="30" rows="10"
          className="p-text"
          placeholder='Enter Your Message'
          value={message}
          onChange={handleChangeInput}
        />
      </div>
      <button type='button' className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)