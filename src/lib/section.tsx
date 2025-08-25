const Section = ({
  id,
  title,
  subtitle,
  titleColor,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  titleColor?: string;
  children: React.ReactNode;
}) => {
  return (
    <section id={id} className="mx-auto max-w-[2300px] px-4 py-14 md:px-6 lg:px-8">
      <div className="container">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className={`text-2xl font-bold tracking-tight text-${titleColor} md:text-3xl`}>
              {title}
            </h2>
            {subtitle && <p className={`mt-2 max-w-2xl text-sm text-${titleColor}`}>{subtitle}</p>}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};
export default Section;
