import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function Header({ theme, toggleTheme }) {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['Web Designer', 'Full Stack Developer', 'UI/UX Designer'];

  useEffect(() => {
    const currentFullText = roles[currentRole];
    let timer;

    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <header id="Home">
      <nav id="main-nav" style={{ background: 'var(--nav-bg)' }}>
        <div className="container">
          <div className="logo">
            <a href="#Home">
              BISHAL<span style={{ color: 'var(--primary)' }}>.</span>
            </a>
          </div>

          <div className="cta">
            <a href="#contact">
              <button className="btn btn-primary">Let's Talk</button>
            </a>
          </div>

          <div className="theme-toggle-wrapper">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </div>
        </div>
      </nav>

      <div className="container hero" style={{ justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
        <div className="hero-bg-glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80vw', height: '80vw', opacity: 0.3 }}></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ paddingRight: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4rem' }}
        >
          <motion.h6
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.5rem', letterSpacing: '4px', marginBottom: '1.5rem', color: 'var(--primary)', marginTop: '2rem' }}
          >
            HELLO, I AM
          </motion.h6>

          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1rem' }}
          >
            Bishal <span className="text-gradient">Tamang</span>
          </motion.h1>

          <div style={{ height: '60px', marginBottom: '2rem' }}>
            <span className="typing-role" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
              {displayText}<span className="cursor">|</span>
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ margin: '0 auto 3rem', maxWidth: '600px' }}
          >
            Crafting premium digital experiences with modern web technologies.
            Focusing on performance, accessibility, and pixel-perfect design.
          </motion.p>

          <motion.div
            className="flex gap-4"
            style={{ gap: '1.5rem', display: 'flex', justifyContent: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="/CV.pdf" download="CV">
              <button className="btn btn-primary">Download CV</button>
            </a>
            <a href="#project">
              <button className="btn btn-secondary">View Work</button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}