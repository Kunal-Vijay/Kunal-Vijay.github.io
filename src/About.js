import React from 'react';
import "./About.css";
import "./App.css";
import aboutImg from "./img/about.jpg";

function About() {
    // up to top btn
    window.addEventListener("scroll",function(){
        const upToTop = document.querySelector("a.bottom__to__top");
        upToTop.classList.toggle("active",window.scrollY>0);
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
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto porro fuga maxime. Nisi voluptatum officia quisquam voluptate, debitis voluptatem laborum repellat, alias accusantium porro sit, recusandae autem ab dolore saepe tempora. Laudantium voluptates, autem numquam tenetur consequatur quisquam aut voluptas, eos reiciendis harum nesciunt omnis animi alias nemo ratione debitis?
                            </p>
                            <p className="about__text p__color">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto porro fuga maxime. Nisi voluptatum officia quisquam voluptate, debitis voluptatem laborum repellat, alias accusantium porro sit, recusandae autem ab dolore saepe tempora. Laudantium voluptates, autem numquam tenetur consequatur quisquam aut voluptas, eos reiciendis harum nesciunt omnis animi alias nemo ratione debitis?
                            </p>
                            <p className="about__text p__color">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto porro fuga maxime. Nisi voluptatum officia quisquam voluptate, debitis voluptatem laborum repellat, alias accusantium porro sit.
                            </p>
                            <div className="about__button d__flex align__items__center">
                                <a href="#CV"><button className="about btn pointer">Download CV</button></a>
                                <a href="#Hire"><button className="about btn pointer">Hire Me</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="up__to__top__btn">
                <a href="#" className='bottom__to__top'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up white" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default About