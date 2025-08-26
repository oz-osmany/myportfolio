import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-10 lg:py-[6.25rem] text-center">
        <h2 className="text-[25px] lg:text-3xl font-bold text-white pb-[20px]">About me</h2>
        <div className="mt-6 flex flex-col items-center">
          <div className="about__img about__mask">
            <img src="/assets/engineer.jpg" alt="engineer" className="about__img" />
          </div>
          <p className="mt-6 text-white/80 text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed">
            Hi, I'm Oz — a web developer who loves building interactive and user‑friendly
            experiences. I work mainly with React and TypeScript and enjoy giving a touch of UI/UX
            design to every project.
          </p>
        </div>
      </section>
      {/* —— Beyond Code */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-3xl font-bold text-white text-center pb-[20px]">Beyond Code</h2>
        <div className="mt-6 flex flex-col items-center gap-8">
          <div className="about__img about__mask">
            <motion.img
              src="/assets/dancer-leader.webp"
              alt="engineer"
              className="about__image"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
          <p className="text-white/80 text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed">
            When I'm not coding, you'll probably find me dancing — my other big passion. I'm
            currently looking for new opportunities to grow, create, and bring fresh ideas to life.
          </p>
        </div>
      </section>
    </>
  );
}
