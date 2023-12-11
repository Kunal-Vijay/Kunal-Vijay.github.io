import React from 'react';
import "./About.css";
import "./App.css";
import aboutImg from "./img/about.jpeg";

function About() {
    // up to top btn
    window.addEventListener("scroll", function () {
        const upToTop = document.querySelector("a.bottom__to__top");
        upToTop.classList.toggle("active", window.scrollY > 0);
    });

    return (
        <div className="about component__space" id='About'>
            <div className="container">
                <div className="row">
                    <div className="col__2">
                        <img src={aboutImg} alt="my_img" className="about__img" />
                    </div>
                    <div className="col__2">
                        <h1 className="about__heading">  About Me  </h1>
                        <div className="about__meta">
                            <p className="about__text p__color">
                                Hey! My name is Kunal Vijay and Tech enthusiast with a love for reading. I am currently a final year student at IIIT Bhopal pursuing B.tech degree in Information Technology.
                            </p>
                            <p className="about__text p__color">
                            I have been an active programmer and proficient in C/C++ and Java. Apart from this My Tech stack also include MERN stack , NextJS, tailwind and other related web development technologies. Passionate in collaborating with new people and brainstorming on topics of mutual interest.
                            </p>
                            <p className="about__text p__color">
                            As for experience I have done two internships as  a SDE Intern at Algowiz and Frontend Developer at Profitlabs where I developed website frontend from scratch in NextJS and ReactJS. Moreover, I got the privilege to manage my team in both the internships. Also  At IIIT Bhopal, I served as the Asst. Web Development Lead for GDSC  IIITB of 2022 where I got to work on trending web development Technologies.
                            </p>
                            <div className="about__button d__flex align__items__center">
                                <a href="https://drive.google.com/file/d/175jCiV103r_b7xuzJMJVLBZJP0JdSir_/view?usp=sharing" target='_blank'><button className="about btn pointer">Download CV</button></a>
                                <a href="#Contact"><button className="about btn pointer">Hire Me</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="up__to__top__btn">
                <a href="#Home" className='bottom__to__top'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up white" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default About