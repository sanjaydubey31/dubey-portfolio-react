import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Chatbot } from "../Chatbot/Chatbot";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <a href="/" className={styles.navbarLogo} onClick={closeMenu}>
          Portfolio
        </a>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <img 
            src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} 
            alt="menu" 
          />
        </div>
        <div className={`${styles.navbarLinks} ${menuOpen ? styles.menuOpen : ''}`}>
          <a href="#home" className={styles.navbarLink} onClick={closeMenu}>
            Home
          </a>
          <a href="#about" className={styles.navbarLink} onClick={closeMenu}>
            About
          </a>
          <a href="#experience" className={styles.navbarLink} onClick={closeMenu}>
            Experience
          </a>
          <a href="#projects" className={styles.navbarLink} onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" className={styles.navbarLink} onClick={closeMenu}>
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
