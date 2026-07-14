import { Project } from '../../types';
import styles from './ProjectsSection.module.css';

interface ProjectCardProps {
  project: Project;
  isExpanded?: boolean;
  animationDelay?: string;
}

export default function ProjectCard({ project, isExpanded, animationDelay }: ProjectCardProps) {
  const cardClasses = `${styles.projectCard} ${isExpanded ? styles.projectCardExpand : ''}`;

  return (
    <div
      className={cardClasses}
      style={animationDelay ? { animationDelay } : undefined}
    >
      <div className={styles.projectArrow}>↗</div>
      <div className={styles.projectNum}>
        {String(project.id).padStart(2, '0')}
      </div>
      <div className={`${styles.projectImg} ${styles[project.gradientClass]}`}>
        {project.emoji}
      </div>
      <span className={styles.projectTag}>{project.tag}</span>
      <div className={styles.projectTitle}>{project.title}</div>
      <div className={styles.projectDesc}>{project.description}</div>
    </div>
  );
}
