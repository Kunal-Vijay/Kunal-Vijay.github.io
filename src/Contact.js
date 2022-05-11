import React from 'react';
import "./Contact.css";
import "./App.css";
import contactImg from './img/about-9.jpg';

function Contact() {
    return (
        <div className="contact component__space">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me</h1>
                            <p className="hire__text white">I am available for Freelancing and Part Time Internships</p>
                            <p className="hire__text white"><strong>+91 9887399972</strong> or email <strong>kunal20vijay00@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                            <input type="text" className="contact name" placeholder='Your Name*' />
                            <input type="text" className="contact email" placeholder='Your email*' />
                            <input type="text" className="contact subject" placeholder='Write a Subject' />
                            <textarea name="message" id="message" placeholder='Write your message here...'></textarea>
                            <button className="btn pointer contact" type='submit'>Submit</button>
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