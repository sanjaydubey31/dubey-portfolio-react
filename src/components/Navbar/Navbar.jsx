import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Chatbot } from "../Chatbot/Chatbot";
import { Link } from "react-router-dom";

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
        <Link to="/" className={styles.navbarLogo} onClick={closeMenu}>
          Portfolio
        </Link>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <img 
            src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} 
            alt="menu" 
          />
        </div>
        <div className={`${styles.navbarLinks} ${menuOpen ? styles.menuOpen : ''}`}>
          <Link to="/#home" className={styles.navbarLink} onClick={closeMenu}>
            Home
          </Link>
          <Link to="/#about" className={styles.navbarLink} onClick={closeMenu}>
            About
          </Link>
          <Link to="/#experience" className={styles.navbarLink} onClick={closeMenu}>
            Experience
          </Link>
          <Link to="/#projects" className={styles.navbarLink} onClick={closeMenu}>
            Projects
          </Link>
          <Link to="/blog" className={styles.navbarLink} onClick={closeMenu}>
            Blog
          </Link>
          <Link to="/#contact" className={styles.navbarLink} onClick={closeMenu}>
            Contact
          </Link>
          <button onClick={toggleChatbot} className={styles.navbarLink}>
            AI Assistant
          </button>
        </div>
      </div>
      <Chatbot isOpen={isChatbotOpen} onClose={toggleChatbot} />
    </nav>
  );
};
