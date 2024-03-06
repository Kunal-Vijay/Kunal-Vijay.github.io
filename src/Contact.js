import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import "./App.css";
import contactImg from './img/map.png';
import {  toast } from 'react-toastify';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_vijoim4', 'template_t60j6k4', form.current, {
                publicKey: 'jo6mkBcMPXMUp8z05',
            })
            .then(
                () => {
                    toast.success("Message sent successfully");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Failed to sent ...some error occured");
                },
            );  
    };
    return (
        <div className="contact component__space" id='Contact'>
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contact Me</h1>
                            <p className="hire__text white">I am available for Freelancing and Part Time Internships</p>
                            <p className="hire__text white">Call on <strong>+91 9887399972</strong> or email <strong>kunal20vijay00@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                            <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="user_name" className="contact name" placeholder='Your Name*' />
                            <input type="text" name="user_email" className="contact email" placeholder='Your email*' />
                            <textarea name="message" id="message" placeholder='Write your message here...'></textarea>
                            <button className="btn pointer contact" type='submit'>Submit</button>
                            </form>
                           
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} className="contact__img" alt="contact_img" />
                </div>
            </div>
        </div>
    )
}

export default Contact