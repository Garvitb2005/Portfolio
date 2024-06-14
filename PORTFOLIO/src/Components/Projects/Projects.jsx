import React from "react";
import Styles from "./Projects.module.css";

function Services() {
  return (
    <>
    <div id="projects" className={Styles.heading}><h1>Projects</h1></div>
        
      <div className={Styles.container}>
        <div className={Styles.box}>
          <h3>Weather App</h3>
          <p>This app sends request through an api and gives you a response</p>
        </div>
        <div className={Styles.box}>
          <h3>Payment System</h3>
          <p>This app allows to you pay your bills</p>
        </div>
        <div className={Styles.box}>
          <h3>CURA</h3>
          <p>
            This was a healthcare app+website where you can order medicines
            online
          </p>
        </div>
        <div className={Styles.box}>
          <h3>Weather App</h3>
          <p>This app sends request through an api and gives you a respnse</p>
        </div>
        <div className={Styles.box}>
          <h3>Payment System</h3>
          <p>This app allows to pay you your bills</p>
        </div>
        <div className={Styles.box}>
          <h3>CURA</h3>
          <p>
            This was a healthcare app+website where you can order medicines
            online
          </p>
        </div>
      </div>
    </>
  );
}

export default Services;
