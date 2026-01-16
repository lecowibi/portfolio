import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container about-container">
        <motion.div
          className="flex-1"
          style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            zIndex: 0,
            maxWidth: '400px'
          }}></div>
          <img
            className="about-me"
            src="img/self2.jpg"
            alt="about"
            style={{
              width: '100%',
              maxWidth: '400px',
              borderRadius: '20px',
              position: 'relative',
              zIndex: 1,
              display: 'block',
              border: '2px solid var(--primary)'
            }}
          />
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            About <span className="text-gradient">Me</span>
          </h2>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
            Hello, I'm Bishal Tamang
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            I am a passionate Web Designer and Full Stack Developer with a keen eye for detail.
            I specialize in creating beautiful, functional, and user-friendly websites.
            With expertise in modern technologies like React, Node.js, and refined animation libraries,
            I bring digital ideas to life. I am dedicated to writing clean, efficient code and
            continuously learning new trends to deliver the best results for my clients.
          </p>
          <div className="social-media flex" style={{ display: 'flex', gap: '1rem' }}>
            {[
              { name: 'whatsapp', url: 'https://whatsapp.com/dl/' },
              { name: 'facebook', url: 'https://www.facebook.com/lecowibi' },
              { name: 'github', url: 'https://github.com/lecowibi' },
              { name: 'instagram', url: 'https://www.instagram.com/lecowibi' }
            ].map((social, i) => (
              <motion.a
                href={social.url}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  background: 'var(--footer-icon-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'var(--glass-border)',
                }}
                whileHover={{ scale: 1.2, rotate: 10, background: 'var(--primary)', color: '#000' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={`img/${social.name}.svg`}
                  alt={social.name}
                  style={{ width: '20px', filter: 'brightness(0) invert(1)' }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}