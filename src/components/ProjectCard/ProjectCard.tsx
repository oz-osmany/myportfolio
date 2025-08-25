import { motion } from 'framer-motion';

type Props = {
  title: string;
  description: string;
  tags?: string[];
  image?: string;
  href?: string;
};

export default function ProjectCard({ title, description, tags = [], image, href }: Props) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.995 }}
      className="project-card"
    >
      {image && <img src={image} alt={title} className="project-card__image" />}
      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>
        {tags.length > 0 && (
          <ul className="project-card__tags">
            {tags.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>
        )}
        {href && (
          <a className="btn btn--ghost" href={href} target="_blank" rel="noreferrer">
            See repo
          </a>
        )}
      </div>
    </motion.article>
  );
}
