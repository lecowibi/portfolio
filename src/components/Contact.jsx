import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="section-heading" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Contact <span className="text-gradient">Me</span>
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>
            I provide high standard website for your business platform
          </p>
        </motion.div>
        <div className="card-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {[
            { icon: 'img/phone.svg', title: 'Call On', info: '+977 9843145831' },
            { icon: 'img/email.svg', title: 'Email At', info: 'tbishal0088@gmail.com' },
            { icon: 'img/map.svg', title: 'Visit Me', info: 'Kathmandu, Kapan , TenzingChowk' },
          ].map((contact, index) => (
            <motion.div
              key={index}
              className="glass-card"
              style={{ textAlign: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <img src={contact.icon} alt={contact.title} style={{ width: '50px', marginBottom: '1rem', filter: 'invert(1)' }} />
              <h1 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{contact.title}</h1>
              <h6 style={{ color: 'var(--text-muted)', fontWeight: '400' }}>{contact.info}</h6>
            </motion.div>
          ))}
        </div>
        <motion.form
          className="glass-card"
          action="https://api.web3forms.com/submit"
          method="POST"
          style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <input type="hidden" name="apikey" value="e09df605-6e29-4686-b128-59205455054a" />
          <div className="input-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                padding: '1rem 0',
                color: 'var(--text-main)',
                fontSize: '1rem',
                outline: 'none',
                width: '100%'
              }}
            />
            <input
              type="email"
              name="e-mail"
              placeholder="Your Email"
              required
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                padding: '1rem 0',
                color: 'var(--text-main)',
                fontSize: '1rem',
                outline: 'none',
                width: '100%'
              }}
            />
          </div>
          <div className="input-wrap2" style={{ marginBottom: '2rem' }}>
            <input
              type="text"
              name="subject"
              placeholder="Your Subject..."
              required
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                padding: '1rem 0',
                color: 'var(--text-main)',
                fontSize: '1rem',
                outline: 'none',
                width: '100%',
                marginBottom: '2rem'
              }}
            />
            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="Your Message...."
              required
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                padding: '1rem 0',
                color: 'var(--text-main)',
                fontSize: '1rem',
                outline: 'none',
                width: '100%',
                resize: 'none'
              }}
            ></textarea>
          </div>
          <div className="btn-wrapper" style={{ textAlign: 'center' }}>
            <motion.button
              className="btn btn-primary"
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
