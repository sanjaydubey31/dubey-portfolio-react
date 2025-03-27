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
        I am a passionate software engineer with 20+ years of experience building impactful, scalable solutions in the telecommunications space. I specialize in Java based Full Stack development, salesforce, devops and  Generative AI and Agentic AI. I thrive on solving complex problems, leveraging technology to make life easier for users, and staying ahead of the curve in the fast-evolving tech landscape.
        <br/><br/>Recently, I have ventured into the exciting world of Generative AI and Agentic AI, where I have developed multiple AI agents. You can explore them here:
        </p>
     

        <h3>My AI Agents:</h3>

        <div class="agent-card">
        <div >1 - Generic Chatbot, Users need to provide their own GROQ and Tavily API keys and select the LLM to use this tool.</div>
            <a href="https://huggingface.co/spaces/sanjaydubey733/agenticai" target="_blank" className={styles.agentlink}>Try Generic Chatbot</a>
        </div>

        <div class="agent-card">
        <div >2 - AI Blog Generator (Generates blogs up to 1,500 words).</div>
            <a href="https://huggingface.co/spaces/sanjaydubey733/skd-ai-agent" target="_blank" className={styles.agentlink}>Try Blog Generator</a>
        </div>

        <div class="agent-card">
            <div class="agent-desc">3 - Python Code Peer Review with AI Suggestions.</div>
            <a href="https://huggingface.co/spaces/sanjaydubey733/ai-agents" target="_blank" className={styles.agentlink}>Try Code Review</a>
        </div>

        <div class="agent-card">
            <div class="agent-desc">4 - AI Resume Assistant. Upload your resume and job description below to get modified for ATS-friendly resume.</div>
            <a href="https://huggingface.co/spaces/sanjaydubey733/AI-Resume-Manager" target="_blank" className={styles.agentlink}>Try Resume Assistant</a>
        </div>
        <div class="agent-card">
            <div class="agent-desc">5 - AI Market/Finance Analysis Tool. Enter a financial or market-related query, to get insights</div>
            <a href="https://huggingface.co/spaces/sanjaydubey733/AIFinanceTool" target="_blank" className={styles.agentlink}>Try Finance Tool</a>
        </div>


  
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
