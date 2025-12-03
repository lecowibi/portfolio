import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/header';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="site-main-wrapper">
        <Header />
        <About />
        <Services />
        <section className="freelancer">
          <h1
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            I Am Available for Freelancer
          </h1>
          <p>I provide high standard website for your business platform</p>
          <a href="/CV.pdf" download="CV">
            <button
              className="btn btn-primary"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              Download CV
            </button>
          </a>
        </section>
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;