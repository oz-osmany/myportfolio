import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skillss';
import Start from '@/components/Start';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0b0f17] via-[#0b0f17] to-[#111827]">
      <div>
        <Start />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Skills />
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-20 md:px-6 lg:px-8">
        <Projects />
      </div>
    </div>
  );
}
