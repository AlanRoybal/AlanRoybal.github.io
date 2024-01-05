import React, { useRef } from 'react'
import './contact.css'
import LinkedInIcon from '../../assets/LinkedInIcon.svg'
import GithubIcon from '../../assets/GithubIcon.svg'
import InstagramIcon from '../../assets/InstagramIcon.svg'
import TikTokIcon from '../../assets/TikTokIcon.svg'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2pwm758', 'template_pcv7k8s', form.current, 'kx9eR9aC9hFTfNXr8')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!')
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc"></span>
            <form ref={form} className="contactForm" onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='from_name' />
                <input type="email" className="email" placeholder='Your Email' name='from_email' />
                <textarea name="message" className="msg" rows="5" placeholder='Your Message'></textarea>
                <button className="submitBtn" type='submit' value='Send'>Submit</button>
                <div className="links">
                    <img src={LinkedInIcon} alt="LinkedIn" className="link" />
                    <img src={GithubIcon} alt="Github" className="link" />
                    <img src={InstagramIcon} alt="Instagram" className="link" />
                    <img src={TikTokIcon} alt="TikTok" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact