
import "./App.css";

export default function App() {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="nav-spacer"></div>

          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
  {/* BULAT BACKGROUND HERO */}
  <div className="hero-bg"></div>

  <div className="hero-inner">
    <img src="/gambar.png" className="gambar" alt="gambar" />

    <h1 className="title">
      I do code and <br />
      make content <span>about it!</span>
    </h1>

    <p className="desc">
      I am a seasoned full-stack software engineer with over 8 years of
      professional experience, specializing in backend development.
      My expertise lies in crafting robust and scalable SaaS-based
      architectures on the Amazon AWS platform.
    </p>

    <div className="actions">
      <button className="btn primary">Get In Touch</button>
      <button className="btn outline">Download CV</button>
    </div>

    <div className="tech">
      <p>EXPERIENCE WITH</p>
      <div className="tech-list">
        <span>JS</span>
        <span>Node</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>React</span>
      </div>
    </div>
  </div>
</section>


      {/* PROJECTS */}
      <section className="projects" id="projects">
        <div className="container">
          <h2 className="orange">PROJECTS</h2>

          <div className="grid">
            <div className="card">
              <img src="/project1.png" alt="project 1" />
              <div className="card-footer">
                <small>CLICK HERE TO VISIT</small>
                <h3>HTML TUTORIAL</h3>
              </div>
            </div>

            <div className="card">
              <img src="/project2.png" alt="project 2" />
              <div className="card-footer">
                <small>CLICK HERE TO VISIT</small>
                <h3>CSS TUTORIAL</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="contact">
        <div className="container">
          <h3>Contact</h3>
          <p>abcnodehub@gmail.com</p>
        </div>
      </footer>
    </>
  );
}
