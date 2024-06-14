import React from "react";
import Styles from "./Home.module.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Home() {
  return (
    <>
      <div id="home" className={Styles.container}>
        <div className={Styles.img}>
          <img className={Styles.photo} src="/img/Garvit.png" />
        </div>
        <div className={Styles.aboutme}>
          <p className={Styles.bigText}>
            <span>I'm Garvit Bhartia,</span> frontend
            <br />
            devloper based in India.
          </p>
          <p>
            I am a frontend devloper from Mumbai, India with a very little
            experience in desiging
          </p>
          <br></br>
        </div>
      </div>
      <div className={Styles.btncontainer}>
        <div className={Styles.btn}><AnchorLink className={Styles.anchorLink} offset={50} href="#contact">Contact with me</AnchorLink></div>
        <div className={Styles.btn}>My resume</div>
      </div>
    </>
  );
}

export default Home;
