import React from 'react';
import "./About.css";
import "./App.css";
import aboutImg from "./img/about.jpg";

function About() {
  return (
      <div className="about component__space">
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
      </div>
  )
}

export default About