import React from 'react';
import "./App.css";
import "./Project.css";
import Project1 from "./img/portfolio-1.jpg";
import Project2 from "./img/portfolio-2.jpg";
import Project3 from "./img/portfolio-3.jpg";
import Project4 from "./img/portfolio-4.jpg";

function Project() {
    return (
        <div className="project component__space">
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
                                <h5 className="project__text">TextUtils</h5>
                                <h4 className="project__text">Text Formatter Utility in ReactJS</h4>
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
                                <h5 className="project__text">TextUtils</h5>
                                <h4 className="project__text">Text Formatter Utility in ReactJS</h4>
                                <a href="#link1" className='project__btn'>View Details</a>
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
                                <h5 className="project__text">TextUtils</h5>
                                <h4 className="project__text">Text Formatter Utility in ReactJS</h4>
                                <a href="#link1" className='project__btn'>View Details</a>
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
                                <h5 className="project__text">TextUtils</h5>
                                <h4 className="project__text">Text Formatter Utility in ReactJS</h4>
                                <a href="#link1" className='project__btn'>View Details</a>
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
                                <h5 className="project__text">TextUtils</h5>
                                <h4 className="project__text">Text Formatter Utility in ReactJS</h4>
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
                                <h5 className="project__text">TextUtils</h5>
                                <h4 className="project__text">Text Formatter Utility in ReactJS</h4>
                                <a href="#link1" className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project;