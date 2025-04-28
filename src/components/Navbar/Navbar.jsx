import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Chatbot } from "../Chatbot/Chatbot";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <nav  className={styles.navbar}>
      <div className={styles.navbarContent}>
        <a href="/" className={styles.navbarLogo}>
          Portfolio
        </a>
        <div className={styles.navbarLinks}>
          <a href="#home" className={styles.navbarLink}>
            Home
          </a>
          <a href="#about" className={styles.navbarLink}>
            About
          </a>
          <a href="#experience" className={styles.navbarLink}>
            Experience
          </a>
          <a href="#projects" className={styles.navbarLink}>
            Projects
          </a>
          <a href="#contact" className={styles.navbarLink}>
            Contact
          </a>
          <button onClick={toggleChatbot} className={styles.navbarLink}>
            AI Assistant
          </button>
        </div>
      </div>
      <Chatbot isOpen={isChatbotOpen} onClose={toggleChatbot} />
    </nav>
  );
};
