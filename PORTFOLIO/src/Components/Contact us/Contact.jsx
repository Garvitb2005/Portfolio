import React from "react";
import Styles from "./Contact.module.css";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b91b5888-532b-46bd-b510-2e793cd1e968");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <>
      <h1 className={Styles.heading}>Get in touch</h1>
      <div id="contact" className={Styles.container}>
        <div className={Styles.leftside}>
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className={Styles.details}>
            <p>
              <img className={Styles.email} src="/images/mail_icon.svg"></img>{" "}
              garvitbhartia3003@gmail.com
            </p>
            <p>
              <img className={Styles.phone} src="/images/call_icon.svg"></img>
              +91 7219257771
            </p>
            <p>
              <img
                className={Styles.location}
                src="/images/location_icon.svg"
              ></img>
              Mumbai,India
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className={Styles.input}>
          <label htmlFor="">Your Name</label>
          <input
            className={Styles.inputBox}
            type="text"
            placeholder="Enter your name"
            name="name"
          ></input>

          <label htmlFor="">Your Email</label>
          <input
            className={Styles.inputBox}
            type="text"
            placeholder="Enter your email"
            name="email"
          ></input>

          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className={Styles.submit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
