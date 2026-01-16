import { motion } from 'framer-motion';
import { SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiPhp, SiTypescript, SiReact, SiNpm, SiNodedotjs, SiTailwindcss } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'HTML5', icon: <SiHtml5 size={40} color="#E34F26" /> },
    { name: 'CSS3', icon: <SiCss3 size={40} color="#1572B6" /> },
    { name: 'Bootstrap', icon: <SiBootstrap size={40} color="#7952B3" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} color="#06B6D4" /> },
    { name: 'JavaScript', icon: <SiJavascript size={40} color="#F7DF1E" /> },
    { name: 'PHP', icon: <SiPhp size={40} color="#777BB4" /> },
    { name: 'TypeScript', icon: <SiTypescript size={40} color="#3178C6" /> },
    { name: 'React', icon: <SiReact size={40} color="#61DAFB" /> },
    { name: 'NPM', icon: <SiNpm size={40} color="#CB3837" /> },
  ];

  return (
    <section id="skill" className="section-padding" style={{ background: 'var(--bg-card)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>My <span className="text-gradient">Skills</span></h2>
          <p style={{ color: 'var(--text-muted)' }}>
            I have honed my skills in various modern technologies.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '2rem',
          justifyItems: 'center'
        }}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                aspectRatio: '1',
                padding: '1rem'
              }}
              whileHover={{ scale: 1.1, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div style={{ marginBottom: '1rem' }}>{skill.icon}</div>
              <h4 style={{ fontSize: '1rem', fontWeight: '500' }}>{skill.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}