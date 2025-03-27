import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/*
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I worked in building React applications with focusing on creating reusable components and efficient state management using hooks, Redux, and Flux. 
              I’ve integrated REST APIs for seamless data fetching and handled complex form creation and validations with libraries. 
              I ensured scalable and maintainable code through component-based architecture and props management. 
              My main focus was responsive UI design, leveraging CSS-in-JS solutions and tools like React Router for navigation. 
              I’ve worked on optimizing performance using lazy loading, memoization, and React DevTools for debugging.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I worked in building Spring Boot microservices using gradle, maven tool focusing on scalable and modular design.,
              I have been working in java, servlets and java based framework since 2000,  
              I have implemented RESTful APIs with efficient CRUD operations and used Spring Data JPA for seamless data persistence. 
              I’ve worked on inter-service communication using Feign clients and API Gateway. 
              I also setup up distributed logging and managing services using Spring Cloud (Eureka, Config Server, Circuit Breaker), and ensuring security with JWT and OAuth2. 
              I also worked to enable SSO with react and microservices based app, and used Apigee also in for standalone microservices.  
              I have also containerized microservices with Docker and automated deployments using CI/CD pipelines.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              I have experience designing intuitive and responsive UIs using Figma, with a focus on creating design systems, wireframes, and prototypes. I leverage components, auto-layout, and interactive prototypes to ensure consistency and streamline collaboration with developers. I work closely with stakeholders to align business goals with user experience, delivering visually appealing and functional designs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
