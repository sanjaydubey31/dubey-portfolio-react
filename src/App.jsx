import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Chatbot } from "./components/Chatbot/Chatbot";
import { UserApp } from "./components/UserForm/UserForm";
import { Blog } from "./components/Blog/Blog";
import { Resume } from "./components/Resume/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function MainContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <UserApp />
      <Chatbot />
    </>
  );
}

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
