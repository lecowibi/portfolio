export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h1 className="section-heading">
          <span>Our</span> Services
        </h1>
        <p data-aos="fade-buttom" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          I provide high standard website for your business platform
        </p>
        <div className="card-wrapper">
          {[
            { icon: 'img/brush.svg', title: 'Graphic Design' },
            { icon: 'img/code.svg', title: 'Web Development' },
            { icon: 'img/bag.svg', title: 'Media Marketing' },
            { icon: 'img/desktop.svg', title: 'Web Design' },
            { icon: 'img/media.svg', title: 'Video Editing' },
            { icon: 'img/phone.svg', title: 'Apps' },
          ].map((service, index) => (
            <div
              key={index}
              className="card"
              data-aos="zoom-in-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={service.icon} alt={service.title} />
              <h2>{service.title}</h2>
              <p>There are many variation of passage of but the majoryity have suffered alternation in some form</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}