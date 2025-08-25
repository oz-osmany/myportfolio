import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skillss';
import Start from '@/components/Start';

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero__bg"></div>
        <div className="hero__blur"></div>
        <Start />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Projects />
      </section>
    </div>
  );
}
