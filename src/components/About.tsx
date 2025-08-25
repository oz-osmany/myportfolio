export default function About() {
  return (
    <section className="about">
      <div className="about__inner">
        <div className="about__me">
          <h1 className="about__title">About me</h1>
          <div className="about__img about__mask">
            <img src="/assets/engineer.jpg" alt="engineer" className="about__image" />
          </div>
          {/* Text */}
          <div className="about__text">
            <p>
              Hi, I'm Oz — a web developer who loves building interactive and user-friendly
              experiences. I work mainly with React, TypeScript, CSS and enjoy giving a touch of
              UI/UX design to every project. When I'm not coding, you'll probably find me dancing —
              my other big passion. I'm currently looking for new opportunities to grow, create, and
              bring fresh ideas to life.
            </p>
          </div>
        </div>
        <div className="about__beyond">
          <h1 className="about__title">Beyond Code</h1>
          <div className="about__img about__mask">
            <img src="/assets/dancer-leader.webp" alt="dancer-leader" />
          </div>
          <div className="about__text">
            <p>
              As founder and leader of my own dance school, I’ve had the chance to teach, guide and
              perform with amazing people. Dance has taught me discipline, teamwork, creativity and
              how to connect with others — qualities that I also bring into my work as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
