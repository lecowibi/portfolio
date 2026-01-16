export default function Footer() {
  return (
    <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: 'var(--glass-border)' }}>
      <img className="footer-logo" src="img/logo.svg" alt="footer logo" style={{ height: '40px', marginBottom: '1.5rem', filter: 'var(--logo-filter)' }} />
      <div className="footer-social" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
        {[
          { name: 'facebook', url: 'https://www.facebook.com/lecowibi' },
          { name: 'whatsapp', url: 'https://whatsapp.com/dl/' },
          { name: 'github', url: 'https://github.com/lecowibi' },
          { name: 'instagram', url: 'https://www.instagram.com/lecowibi' }
        ].map(social => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              transition: 'all 0.3s ease',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--footer-icon-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'var(--glass-border)'
            }}
          >
            <img
              src={`img/${social.name}.svg`}
              alt={social.name}
              style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }}
            />
          </a>
        ))}
      </div>
      <div className="copyright" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        Copyright 2024 &copy; Bishal Tamang. All Right Reserved.
      </div>
    </footer>
  );
}