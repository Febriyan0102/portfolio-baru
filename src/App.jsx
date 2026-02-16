import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import gambar from "./assets/gambar.png";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import cv from "./assets/cv.pdf";
import "./App.css";

export default function App() {

  // ===== CURSOR SPOTLIGHT =====
  useEffect(() => {
    const move = (e) => {
      document.body.style.setProperty("--x", e.clientX + "px");
      document.body.style.setProperty("--y", e.clientY + "px");
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // ===== SCROLL REVEAL =====
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    }, { threshold: 0.15 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // ===== SMOOTH NAV SCROLL =====
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="nav-spacer"></div>
          <nav className="nav">
            <a onClick={() => scrollToId("home")}>Home</a>
            <a onClick={() => scrollToId("projects")}>Projects</a>
            <a onClick={() => scrollToId("contact")}>Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero reveal" id="home">
        <div className="hero-bg"></div>
        <div className="hero-inner">
          <img src={gambar} className="gambar" alt="gambar" />

          <h1 className="title">
            Hi, I'm <span>Febriyan</span> <br />
            <span className="floating">Welcome to my portfolio!</span>
          </h1>

          <p className="desc typing"
            style={{
              width: "28ch",
              animation: "typing 4s steps(28) forwards, blink 0.7s step-end infinite"
            }}
          >
            I am a <strong>Junior Web Developer</strong> exploring and building modern web applications.
          </p>

          <div className="actions">
            <a href="https://github.com/Febriyan0102" target="_blank" rel="noopener noreferrer" className="btn primary">
              github project
            </a>
            <a href={cv} download className="btn outline">
              Download CV
            </a>
          </div>

          <div className="tech">
            <p>EXPERIENCE WITH</p>
            <div className="tech-list">
              <span className="html">Html</span>
              <span className="css">Css</span>
              <span className="react">React</span>
              <span className="laravel">Laravel</span>
              <span className="mysql">MySQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects reveal" id="projects">
        <div className="container">
          <h2 className="orange">PROJECTS</h2>
          <div className="grid">
            <div className="card reveal">
              <img src={project1} alt="project1" />
              <div className="card-footer">
                <small>Government</small>
                <h3>village website</h3>
              </div>
            </div>
            <div className="card reveal">
              <img src={project2} alt="project2" />
              <div className="card-footer">
                <small>Expert system</small>
                <h3>scabies in humans</h3>
              </div>
            </div>
            <div className="card reveal">
              <img src={project3} alt="project3" />
              <div className="card-footer">
                <small>E-commerce</small>
                <h3>website for purchasing train and planet tickets</h3>
              </div>
            </div>
            <div className="card reveal">
              <img src={project4} alt="project4" />
              <div className="card-footer">
                <small>E-commerce</small>
                <h3>ticket purchase checkout page</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer reveal" id="contact">
        <div className="container contact-box">
          <h3>Contact</h3>
          <p className="contact-text">
            As a student learning Web Development, I highly value all feedback and suggestions you can provide. Please share your insights to support the development of my skills and portfolio. Thank you.
          </p>
          <p className="contact-email">febriyanaji02@gmail.com</p>
          <div className="contact-icons">
            <a href="https://github.com/Febriyan0102" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.9 3.2 9 7.6 10.5.6.1.8-.2.8-.6v-2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.2-1.3-5.2-5.8 0-1.3.5-2.4 1.3-3.3-.1-.3-.6-1.6.1-3.2 0 0 1.1-.3 3.4 1.3a11.7 11.7 0 016.2 0c2.3-1.6 3.4-1.3 3.4-1.3.7 1.6.2 2.9.1 3.2.8.9 1.3 2 1.3 3.3 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .4.2.7.8.6 4.4-1.5 7.6-5.6 7.6-10.5C23.1 5.3 18.3.5 12 .5z"/>
              </svg>
            </a>

            <a href="mailto:febriyanaji02@gmail.com">
              <svg viewBox="0 0 24 24">
                <path d="M2 4h20v16H2V4zm10 9L20 6H4l8 7z"/>
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/febriyan-aji-saputra" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 5 3.9 6 2.5 6S0 5 0 3.5 1.1 1 2.5 1 4.98 2 4.98 3.5zM.5 8h4V24h-4zM8 8h3.8v2.2h.1c.5-1 1.9-2.2 3.9-2.2 4.2 0 5 2.7 5 6.3V24h-4v-7.6c0-1.8 0-4.2-2.6-4.2s-3 2-3 4V24H8z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
