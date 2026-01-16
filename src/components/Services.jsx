import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            <span className="text-gradient">Our</span> Services
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>
            I provide high standard website for your business platform
          </p>
        </motion.div>
        <div className="card-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { icon: 'img/brush.svg', title: 'Graphic Design' },
            { icon: 'img/code.svg', title: 'Web Development' },
            { icon: 'img/bag.svg', title: 'Media Marketing' },
            { icon: 'img/desktop.svg', title: 'Web Design' },
            { icon: 'img/media.svg', title: 'Video Editing' },
            { icon: 'img/phone.svg', title: 'Apps' },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="glass-card"
              style={{ textAlign: 'center' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <img src={service.icon} alt={service.title} style={{ width: '60px', marginBottom: '1.5rem', filter: 'drop-shadow(0 0 10px rgba(0,242,234,0.3))' }} />
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                There are many variation of passage of but the majoryity have suffered alternation in some form
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}