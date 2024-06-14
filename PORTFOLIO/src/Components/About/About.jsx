import React from "react";
import Styles from "./About.module.css";

function About() {
  return (
    <>
      <div id="about" className={Styles.container}>
        <h1>About me</h1>

        <div className={Styles.content}>
          <div>
            <img className={Styles.img} src="/img/Garvit.png" />
          </div>
          <div>
            <p>
              I am a new devloper who knows HTML, CSS, JavaScript, and have
              expertice in C++, DSA{" "}
            </p>
            <p>
              I am looking for amazing projects where I can use my expertize for
              the benifit of our company
            </p>
            <div className={Styles.aboutSkills}>
              <div className={Styles.aboutSkill}><p>HTML & css</p><hr style={{ width: "60%" }} /></div>
              <div className={Styles.aboutSkill}><p>React JS</p><hr style={{ width: "50%" }} /></div>
              <div className={Styles.aboutSkill}><p>JavaScript</p><hr style={{ width: "50%" }} /></div>
              <div className={Styles.aboutSkill}><p>DSA</p><hr style={{ width: "65%" }} /></div>
              <div className={Styles.aboutSkill}><p>C++</p><hr style={{ width: "85%" }} /></div>
              <div className={Styles.aboutSkill}><p>Python</p><hr style={{ width: "50%" }} /></div>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.achievements}>
        <div className={Styles.achievement}>
            <h1>01</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className={Styles.achievement}>
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className={Styles.achievement}>
            <h1>2+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </>
  );
}

export default About;
