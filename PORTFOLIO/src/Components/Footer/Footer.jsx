import React from "react";
import Styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footerTop}>
        <div className={Styles.footerTopLeft}>
          <h1>Garvit</h1>
          <p>I am a frontend devloper from India with 6 months experience.</p>
        </div>
        <div className={Styles.footerTopRight}>
          <div className={Styles.footerEmailInput}>
            <img src="/images/user_icon.svg" alt="Email"></img>
            <input type="email" placeholder="Enter your email"></input>
          </div>
          <div  className={Styles.footerSubscribe}>Subscribe</div>
        </div>
      </div>
      <hr></hr>
      <div className={Styles.footerBottom}>
        <p className={Styles.footerBottomLeft}>
          &#169; 2024 Garvit Bhartia. All rights reserved.{" "}
        </p>
        <div className={Styles.footerBottomRight}>
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
