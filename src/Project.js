import React from 'react';
import "./App.css";
import "./Project.css";
import Project1 from "./img/project-01.png";
import Project2 from "./img/project-02.png";
import Project3 from "./img/project-03.png";
import Project4 from "./img/project-04.png";
import Project5 from "./img/project-05.png";

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
                                <a href="https://github.com/Kunal-Vijay/GDSC-IIITB-Official-Site" className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project4} alt="Project-1-img" className='project__img' />
                                </div>
                                <div className="mask__effect"> </div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Magic Notes</h5>
                                <h4 className="project__text">A website for taking e-notes</h4>
                                <a href="https://github.com/Kunal-Vijay/Magic-Notes" className='project__btn'>View Details</a>
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
                                <a href="https://github.com/Kunal-Vijay/TextUtils" className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="Project-1-img" className='project__img' />
                                </div>
                                <div className="mask__effect"> </div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Personal Portfolio</h5>
                                <h4 className="project__text">Basic portfolio using HTML and CSS</h4>
                                <a href="https://github.com/Kunal-Vijay/Baisc-Portfolio" className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Project;