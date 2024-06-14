import React, { useState } from "react";
import Styles from "./Navigation.module.css";
import Home from "../Home/Home";
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Navigation() {
  const [menu, setMenu] = useState("home");
  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.logo}>Garvit</div>

        <div className={Styles.nav}>
          <ul className={Styles.navlinks}>
            <li><AnchorLink className={Styles.anchorLink} href="#home" ><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"? <img src="/images/nav_underline.svg" alt=""/>:<></>}</li>
            <li><AnchorLink className={Styles.anchorLink} offset={50} href="#about" ><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"? <img src="/images/nav_underline.svg" alt=""/>:<></>}</li>
            <li><AnchorLink className={Styles.anchorLink} offset={50} href="#projects" ><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu==="projects"? <img src="/images/nav_underline.svg" alt=""/>:<></>}</li>
            <li><AnchorLink className={Styles.anchorLink} offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink> {menu==="contact"? <img src="/images/nav_underline.svg" alt=""/>:<></>}</li>
          </ul>
        </div>

        <div>
          <button className={Styles.navButton}><AnchorLink className={Styles.anchorLink} offset={50} href="#contact">Connect with me</AnchorLink></button>
        </div>
      </header>
    </>
  );
}

export default Navigation;
