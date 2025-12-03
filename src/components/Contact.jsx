export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h1 className="section-heading" data-aos="fade-up">
          Contact <span>Me</span>
        </h1>
        <p data-aos="fade-up">I provide high standard website for your business platform</p>
        <div className="card-wrapper">
          {[
            { icon: 'img/phone.svg', title: 'Call On', info: '+977 9843145831' },
            { icon: 'img/email.svg', title: 'Email At', info: 'tbishal0088@gmail.com' },
            { icon: 'img/map.svg', title: 'Visit Me', info: 'Kathmandu, Kapan , TenzingChowk' },
          ].map((contact, index) => (
            <div key={index} className="card" data-aos="fade-up">
              <img src={contact.icon} alt={contact.title} />
              <h1>{contact.title}</h1>
              <h6>{contact.info}</h6>
            </div>
          ))}
        </div>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <input type="hidden" name="apikey" value="e09df605-6e29-4686-b128-59205455054a" />
          <div className="input-wrap">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="e-mail" placeholder="Your Email" required />
          </div>
          <div className="input-wrap2">
            <input type="text" name="subject" placeholder="Your Subject..." required />
            <textarea name="message" cols="30" rows="10" placeholder="Your Message...." required></textarea>
          </div>
          <div className="btn-wrapper">
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
