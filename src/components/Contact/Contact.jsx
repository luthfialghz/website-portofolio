import React from "react";
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'
import {MdOutlineEmail} from "react-icons/md"
import {AiOutlineLinkedin} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_39a4dno', 'template_8gnms35', form.current, 'UfC625eG8lTQBMhCp')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                {/* START OF CONTACT OPTION */}
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>luthfialghz@gmail.com</h5>
                        <a href="mailto:luthfialghz@gmail.com" target="_blank">Send a Message</a>
                    </article>

                    <article className="contact__option">
                        <AiOutlineLinkedin className="contact__option-icon" />
                        <h4>Linkedin</h4>
                        <h5>Luthfi Yafi Alfiansyah</h5>
                        <a href="https://www.linkedin.com/in/luthfiyafia" target="_blank">Hit Me Up</a>
                    </article>

                    <article className="contact__option">
                        <AiOutlineInstagram className="contact__option-icon" />
                        <h4>Instagram</h4>
                        <h5>luthfiyell</h5>
                        <a href="https://www.instagram.com/luthfiyell/" target="_blank">Send a Direct Message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTION */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact