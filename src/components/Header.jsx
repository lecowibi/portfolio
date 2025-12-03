import { useState, useEffect } from 'react';

export default function Header() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ['Web Designer', 'Web Developer', 'UI/UX Designer'];

  useEffect(() => {
    const currentFullText = roles[currentRole];
    let timer;

    if (!isDeleting) {
      // Typing effect
      if (displayText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
        }, 100);
      } else {
        // Wait before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting effect
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        // Move to next role
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <header>
      <div className="container">
        <nav id="main-nav" className="flex item-center justify-between">
          <div className="left flex item-center">
            <div className="logo">
              <img src="img/logo.svg" alt="logo" />
            </div>
            <div className="listing">
              <a href="#Home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#skill">Skill</a>
              <a href="#project">Project</a>
            </div>
          </div>
          <div className="right">
            <a href="#contact">
              <button className="btn btn-primary">Contact</button>
            </a>
          </div>
        </nav>

        <div id="Home" className="hero flex item-center justify-between">
          <div
            className="left flex-1 flex justify-between"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src="img/self.png" alt="profile" />
          </div>
          <div
            className="right flex-1"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h6>LECOWIBI</h6>
            <h1>
              I'm a <span className="typing-role">{displayText}<span className="cursor">|</span></span>
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus minima quibusdam debitis eligendi,
              neque suscipit quod ad! Veniam, molestiae culpa. Voluptatibus a incidunt possimus.
            </p>
            <div>
              <a href="/CV.pdf" download="CV">
                <button className="btn btn-secondary">DOWNLOAD CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}