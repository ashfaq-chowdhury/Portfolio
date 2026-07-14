import { Skill } from '../../types';
import styles from './SkillsSection.module.css';

interface SkillItemProps {
  skill: Skill;
}

export default function SkillItem({ skill }: SkillItemProps) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.skillIcon}>{skill.icon}</div>
      <div className={styles.skillName}>{skill.name}</div>
      <div className={styles.skillLevel}>{skill.level}</div>
      <div className={styles.skillBar}>
        <div className={styles.skillFill} style={{ width: `${skill.percentage}%` }}></div>
      </div>
    </div>
  );
}
