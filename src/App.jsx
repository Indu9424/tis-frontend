import { motion } from "framer-motion";
import "./App.css";

const programs = [
  {
    title: "School Education",
    text: "A strong academic foundation that prepares students for a successful future.",
  },
  {
    title: "Holistic Development",
    text: "Nurturing creativity, confidence, leadership and essential life skills.",
  },
  {
    title: "Future Ready",
    text: "Modern learning experiences designed to prepare students for tomorrow.",
  },
];

function App() {
  return (
    <div className="app">
      <div className="progress" />

      <nav className="navbar">
        <div className="logo">
          <span>TIS</span>
          <small>TULAS INTERNATIONAL SCHOOL</small>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#life">Campus Life</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="nav-btn">Apply Now ↗</button>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              TULAS INTERNATIONAL SCHOOL
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Where curiosity
              <br />
              <span>becomes possibility.</span>
            </motion.h1>

            <motion.p
              className="hero-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Inspiring young minds through meaningful learning,
              creativity and experiences that shape confident global citizens.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button className="primary">Explore TIS ↗</button>
              <button className="secondary">Discover our story</button>
            </motion.div>
          </div>

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="circle">TIS</div>
            <div className="floating-card">
              <strong>Learn.</strong>
              <strong>Explore.</strong>
              <strong>Become.</strong>
            </div>
          </motion.div>
        </section>

        <section id="about" className="intro">
          <p className="eyebrow">OUR PHILOSOPHY</p>
          <h2>
            Education is not just about
            <span> what you learn.</span>
          </h2>
          <p>
            At Tulas International School, we believe education should inspire
            students to think independently, discover their strengths and
            confidently create their own future.
          </p>
        </section>

        <section id="programs" className="programs">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE TIS EXPERIENCE</p>
              <h2>Designed for <span>tomorrow.</span></h2>
            </div>
          </div>

          <div className="cards">
            {programs.map((program, index) => (
              <motion.div
                className="program-card"
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="number">0{index + 1}</div>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
                <span className="arrow">↗</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="life" className="statement">
          <p>MORE THAN A SCHOOL</p>
          <h2>
            A place to
            <br />
            <span>belong, grow & dream.</span>
          </h2>
        </section>

        <section id="contact" className="cta">
          <p className="eyebrow">START THE JOURNEY</p>
          <h2>Give your child a world of possibilities.</h2>
          <button className="primary">Talk to TIS ↗</button>
        </section>
      </main>

      <footer>
        <div className="logo">
          <span>TIS</span>
          <small>TULAS INTERNATIONAL SCHOOL</small>
        </div>
        <p>© 2026 Tulas International School</p>
      </footer>
    </div>
  );
}

export default App;