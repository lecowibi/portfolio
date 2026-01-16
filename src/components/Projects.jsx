import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="project" className="section-padding">
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            My <span className="text-gradient">Projects</span>
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>
            Showcasing some of my recent work and experiments.
          </p>
        </motion.div>
        <div className="card-wrapper" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {[
            { title: 'E-commerce (website)', image: 'img/ph2.png', link: '#' },
            { title: 'E-commerce (cloth)', image: 'img/ph-2.png', link: '#' },
            { title: 'Portfolio', image: 'img/ph1.png', link: 'index.html' },
            { title: 'Netflix Clone', image: 'img/ph-3.png', link: '#' },
            { title: 'Anime Gallery', image: 'img/ph-4.png', link: '#' },
            { title: 'Travel', image: 'img/ph3.png', link: '#' },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="glass-card"
              style={{ padding: '0', overflow: 'hidden', position: 'relative', height: '250px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />
              <div className="overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.7)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '0'; }}
              >
                <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
                <a href={project.link} style={{ color: 'var(--primary)', fontWeight: 'bold' }}>View Project</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}