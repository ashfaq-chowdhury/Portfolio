import { Skill } from '../../types';
import SkillItem from './SkillItem';
import styles from './SkillsSection.module.css';

const skills: Skill[] = [
  { icon: "⟨⟩", name: "Web Dev (React, Node.js, SQL)", level: "Intermediate", percentage: 80 },
  { icon: "✦", name: "Core CS (DSA, OOP, DBMS)", level: "Advanced", percentage: 80 },
  { icon: "◈", name: "Programming (C++, Java, JS)", level: "Advanced", percentage: 80 },
  { icon: "🤖", name: "AI / Machine Learning", level: "Intermediate", percentage: 50 },
  { icon: "📱", name: "Android Dev (Kotlin)", level: "Beginner", percentage: 20 },
  { icon: "⚙️", name: "Git & Dev Tools", level: "Advanced", percentage: 85 },
  { icon: "▲", name: "Next.js & TypeScript", level: "Intermediate", percentage: 60 },
  { icon: "🌊", name: "HTML, CSS & Tailwind CSS", level: "Advanced", percentage: 70 },
  { icon: "🐍", name: "Python", level: "Advanced", percentage: 70 },
];

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
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
