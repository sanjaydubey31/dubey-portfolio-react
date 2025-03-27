import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
//import { Testapi } from "../About/Testapi";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:sanjaydubey31@yahoo.com">sanjaydubey31@yahoo.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sanjay-dubey-a3047215/">linkedin.com/in/sanjay-dubey-a3047215/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/sanjaydubey31/">github.com/sanjaydubey31/</a>
        </li>
      </ul>
      {/*<div><Testapi /></div> */}
    </footer>
  );
};
