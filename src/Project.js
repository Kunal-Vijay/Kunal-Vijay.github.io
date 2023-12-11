import React from 'react';
import "./App.css";
import "./Project.css";
import Project1 from "./img/project-01.png";
import Project2 from "./img/project-02.png";
import Project5 from "./img/project-05.png";
import Project6 from "./img/project-06.png";
import Project7 from "./img/project-07.png";
import Project8 from "./img/project-08.png";
import Project9 from "./img/project-09.png";
import Project10 from "./img/project-10.png";

function Project() {
    return (
        <div className="project component__space" id='Project'>
            <div className="heading">
                <h1 className="heading">My Latest Projects</h1>
                <p className='heading p__color'>This is the list of Projects that I made or worked on</p>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project6} alt="Project-1-img" className='project__img' />
                                </div>
                                <div className="mask__effect"> </div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Baci Shop</h5>
                                <h4 className="project__text">Ecommerce Clothing Website</h4>
                                <a href="https://github.com/Kunal-Vijay/E-commerce-site" target='_blank' className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project7} alt="Project-1-img" className='project__img' />
                                </div>
                                <div className="mask__effect"> </div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Chatmate</h5>
                                <h4 className="project__text">Real Time MERN Chatapp with Group as well as Personal Chat</h4>
                                <a href="https://github.com/Kunal-Vijay/Chatmate" target='_blank' className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project8} alt="Project-1-img" className='project__img' />
                                </div>
                                <div className="mask__effect"> </div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Dark Sky</h5>
                                <h4 className="project__text">Weather app with Daily and Hourly Weather Forecast</h4>
                                <a href="https://github.com/Kunal-Vijay/Dark-Sky---Weather-app" target='_blank' className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project9} alt="Project-1-img" className='project__img' />
                                </div>
                                <div className="mask__effect"> </div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">iNoteBook</h5>
                                <h4 className="project__text">Personalised Notes taking app with used specific notes </h4>
                                <a href="https://github.com/Kunal-Vijay/iNotebook" target='_blank' className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project1} alt="Project-1-img" className='project__img' />
                                </div>
                                <div className="mask__effect"> </div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">My Portfolio</h5>
                                <h4 className="project__text">Portfolio website in ReactJS</h4>
                                <a href="#link1" className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project2} alt="Project-1-img" className='project__img' />
                                </div>
                                <div className="mask__effect"> </div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">GDSC site</h5>
                                <h4 className="project__text">GDSC Club IIITB website</h4>
                                <a href="https://github.com/Kunal-Vijay/GDSC-IIITB-Official-Site" target='_blank' className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project10} alt="Project-1-img" className='project__img' />
                                </div>
                                <div className="mask__effect"> </div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">URL Shortner</h5>
                                <h4 className="project__text">My own URL shortner to shorten Website URLs</h4>
                                <a href="https://github.com/Kunal-Vijay/Url-Shortner" target='_blank' className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                 
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project5} alt="Project-1-img" className='project__img' />
                                </div>
                                <div className="mask__effect"> </div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">TextUtils</h5>
                                <h4 className="project__text">Text Formatter Utility in ReactJS</h4>
                                <a href="https://github.com/Kunal-Vijay/TextUtils" target='_blank' className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                   
                    

                </div>
            </div>
        </div>
    )
}

export default Project;