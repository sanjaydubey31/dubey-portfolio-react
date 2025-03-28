import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { Chatbot } from "../Chatbot/Chatbot";
import {UserApp} from "../UserForm/UserForm";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Hi, I'm Sanjay Dubey</h2>
        <p className={styles.description}>
        I am a passionate software engineer with 20+ years of experience building impactful, scalable solutions in the telecommunications space. I specialize in Java based Full Stack development, salesforce, devops and have recently ventured into the exciting world of Generative AI and Agentic AI. I thrive on solving complex problems, leveraging technology to make life easier for users, and staying ahead of the curve in the fast-evolving tech landscape.        
        </p>

        <p className={styles.description}>
        Over the years, I’ve worked on projects that streamline processes, improve user experiences, and unlock new possibilities through innovative thinking. My approach is a mix of technical expertise, creativity, and collaboration. I believe the best solutions come from working together and thinking outside the box.
        </p>
     
        <p className={styles.description}>
          <div class="container">
          <h3>What I Do Best:</h3>
          <ul>
              <li>Building seamless, user-friendly systems with Java-based Full Stack and Salesforce Development</li>
              <li>Developing and deploying cloud-based applications</li>
              <li>Designing smart, scalable architectures for businesses that demand efficiency and innovation</li>
              <li>Creating AI-driven solutions using Generative AI</li>
          </ul>
          </div>
        </p>

  
        {/* <UserApp /> */}
        
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {/* <div ><Chatbot /></div> */}
       
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      
      
    </section>
  );
};
