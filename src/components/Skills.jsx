export default function Skills() {
  return (
    <section
      id="skill"
      className="skill flex item-center justify-center"
      data-aos="fade-buttom"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <h1 className="flex-1">Skill</h1>
      <div className="container flex-1">
        {[
          { title: 'HTML', percentage: '90' },
          { title: 'CSS', percentage: '75', className: 'css' },
          { title: 'Bootstrap', percentage: '47', className: 'bootstrap' },
          { title: 'JavaScript', percentage: '79', className: 'javascript' },
          { title: 'Php', percentage: '60', className: 'php' },
        ].map((skill, index) => (
          <div key={index} className="skill-box">
            <span className="title">{skill.title}</span>
            <div className="skill-bar">
              <span className={`skill-per ${skill.className || ''}`}>
                <span className="tooltip">{skill.percentage}%</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}