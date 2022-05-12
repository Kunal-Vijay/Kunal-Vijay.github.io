import React from 'react'
import "./Footer.css";
import "./App.css";
import footerImg from './img/logo.png'
function Footer() {
  return (
      <div className="footer d__flex align__items__center justify__content__space__between pz__10">
          <img src={footerImg} alt="footer" className="footer__img" />
          <span className="copyright">Copyright © 2022 Programmer Kunal Vijay. All rights reserved</span>
      </div>
  )
}

export default Footer   