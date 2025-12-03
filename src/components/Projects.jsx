export default function Projects() {
  return (
    <section id="project" className="work">
      <div className="container">
        <h1 className="section-heading" data-aos="fade-up">
          <span>My</span> Project
        </h1>
        <p data-aos="fade-up">I provide high standard website for your business platform</p>
        <div className="card-wrapper">
          {[
            { title: 'E-commerce (website)', image: 'img/ph2.png', direction: 'flip-right' },
            { title: 'E-commerce (cloth)', image: 'img/ph-2.png', direction: 'flip-right' },
            { title: 'Portfolio', image: 'img/ph1.png', direction: 'flip-right', link: 'index.html' },
            { title: 'Netflix Clone', image: 'img/ph-3.png', direction: 'flip-left' },
            { title: 'Anime Gallery', image: 'img/ph-4.png', direction: 'flip-left' },
            { title: 'Travel', image: 'img/ph3.png', direction: 'flip-left' },
          ].map((project, index) => (
            <div
              key={index}
              className="card"
              data-aos={project.direction}
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="overlay">
                <span>Category</span>
                <a href={project.link || '#'}>{project.title}</a>
              </div>
              <img src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}