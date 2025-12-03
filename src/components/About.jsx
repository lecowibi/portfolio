export default function About() {
  return (
    <section id="about" className="about">
      <div className="container flex item-center about-inner-wrap">
        <div
          className="flex-1 about-img"
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img className="about-me" src="img/self2.jpg" alt="about" />
        </div>
        <div
          className="flex-1 about-right"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h1>
            About <span>Me</span>
          </h1>
          <h3>Hello I'm Bishal Tamang</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eos natus perspiciatis suscipit
            tempora quis omnis! Eaque sint animi, ea impedit harum eveniet, delectus rem, fuga accusantium
            reiciendis aliquam quidem rerum! Consequatur, veniam commodi!
          </p>
          <div className="social-media flex">
            <a href="https://wa.me/qr/HN4JPC3BQRETO1" target="_blank" rel="noopener noreferrer">
              <img src="img/whatsapp.svg" alt="whatsapp" />
            </a>
            <a href="https://www.facebook.com/bishal7amang/" target="_blank" rel="noopener noreferrer">
              <img src="img/facebook.svg" alt="facebook" />
            </a>
            <a href="https://x.com/bliash0?t=ggRVAgrSicLy5HQUJ7WExw&s=09" target="_blank" rel="noopener noreferrer">
              <img src="img/twitter.svg" alt="twitter" />
            </a>
            <a href="https://www.instagram.com/lecowibi/" target="_blank" rel="noopener noreferrer">
              <img src="img/instagram.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}