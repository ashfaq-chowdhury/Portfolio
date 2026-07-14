import { Skill } from '../../types';
import SkillItem from './SkillItem';
import styles from './SkillsSection.module.css';

const skills: Skill[] = [
  { icon: "✦", name: "UI Design", level: "Expert", percentage: 95 },
  { icon: "◈", name: "Figma", level: "Expert", percentage: 92 },
  { icon: "⟨⟩", name: "Game Development", level: "Advanced", percentage: 80 },
  { icon: "◎", name: "Motion Design", level: "Intermediate", percentage: 70 },
];

export default function SkillsSection() {
  return (
    <section id="skills" className={`${styles.section} ${styles.skillsSection}`}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Skills</h2>
      </div>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}
