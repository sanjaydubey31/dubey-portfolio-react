import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { Chatbot } from "../Chatbot/Chatbot";
import {UserApp} from "../UserForm/UserForm";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sanjay Dubey</h1>
        <p className={styles.description}>
        I'm a java based full stack developer with experience in building responsive and optimized sites using react and microservices, and have recently ventured into the exciting world of Generative AI and Agentic AI. I have 24+ years of experience in Software Development, Design, and Architecture.
        </p>
        {/*}
        <a href="mailto:sanjaydubey31@yahoo.com" className={styles.contactBtn}>
          Contact Me
        </a>
        */}
        <UserApp />
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div ><Chatbot /></div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      
      
    </section>
  );
};
