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
              As a skilled Frontend Developer, I specialize in building dynamic, high-performance web applications using React, Angular, ExtJS, and other JavaScript frameworks. I have expertise in state management (Redux, Context API, RxJS) and creating scalable, component-based architectures. My experience includes TypeScript, ES6+, performance optimization, and accessibility (WCAG compliance). I seamlessly integrate frontend solutions with RESTful and other kind of APIs, ensuring efficient data handling. Skilled in tools like Webpack, Vite, and Babel, I streamline development workflows. Passionate about UI/UX, I stay updated with the latest frontend trends and best practices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I have extensive experience in Java, EJB, Servlets, and Hibernate, building enterprise applications and scalable microservices since 2000. I have developed Spring Boot microservices using Gradle and Maven, focusing on modular architecture and high performance. My expertise includes RESTful API development with efficient CRUD operations, leveraging Spring Data JPA for seamless data persistence. I have worked on inter-service communication using Feign clients and API Gateway and implemented distributed logging and service management with Spring Cloud (Eureka, Config Server, Circuit Breaker). Security is a key focus, where I have integrated JWT, OAuth2, and SSO authentication with React-based microservices. Additionally, I have used Apigee for API management in standalone microservices. My experience also includes containerizing applications with Docker and automating deployments using CI/CD pipelines for seamless software delivery.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Salesforce Developer and Admin</h3>
              <p>
              I led the architecture, design, and development of CRM applications to enhance sales and client interactions on the Salesforce platform, leveraging Lightning Apps, Components, SOQL, Apex Classes/Triggers, Visualforce Pages, Workflows, Approvals, Dashboards, Reports, and Data Loader.
              <br/>
              I implemented Salesforce data integration using Apex, LWC, JavaScript, REST, Apigee, Java Microservices, and Oracle DB to facilitate seamless data exchange with external systems at Verizon.
              <br/>
              In addition to development, I handled Salesforce administration, managing user roles, profiles, and permissions to ensure secure access. I customized objects, fields, workflows, validation rules, and approval processes to optimize business operations.
              <br/>
              I have expertise in creating reports, dashboards, and analytic snapshots for data-driven decision-making and have worked with Data Loader for bulk data operations.
              <br/>
              I also automated Salesforce deployments using Jenkins pipelines, ANT, and Salesforce CLI, ensuring smooth production validation. Additionally, I set up new sandboxes, configured SSO, managed Git repositories, and handled regular environment releases.             </p>
                          </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Gen AI and Agentic AI Developer</h3>
              <p>
              I developed a chatbot using the Ollama framework to manage and install LLM (Llama 3.1), integrating it with the LangChain framework and FastAPI with Uvicorn as middleware to send prompts from Python code to the LLM. This middleware was then integrated into a React component for seamless interaction.
              <br/>
              I built a conversational search agent leveraging the Jina Vector model for embeddings and ChromaDB as a vector store for storing and retrieving embeddings. Using aiohttp/asyncio, I integrated the agent with Verizon Infomanager, enabling it to fetch relevant information from the Infomanager URL based on prompts, supplementing data not available in the LLM.
              <br/>
              Additionally, I created an AI-powered blog generator using LangChain and OpenAI API, capable of generating blogs based on user prompts. I also developed a Python code peer review agent that analyzes and suggests improvements for code.
              <br/>
              I built an AI resume assistant that optimizes resumes to be ATS-friendly based on job descriptions. Moreover, I created a financial analysis tool that provides insights based on financial queries.

              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
