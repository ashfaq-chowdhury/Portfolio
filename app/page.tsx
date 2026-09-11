import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import StatsRow from './components/StatsRow/StatsRow';
import ExpertiseSection from './components/ExpertiseSection/ExpertiseSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import Footer from './components/Footer/Footer';
import { Stat, SocialLink } from './types';
import styles from './page.module.css';

const stats: Stat[] = [
  { value: 3.96, label: "CGPA" },
  { value: 3, label: "Dean's List Awards" },
  { value: 1, label: "Best Thesis Poster" },
];

const socialLinks: SocialLink[] = [
  { name: "Email", url: "mailto:ashfaq17407@gmail.com" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ashfaqur-rahman-chowdhury-2931b8245" },
  { name: "GitHub", url: "https://github.com/ashfaq-chowdhury" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsRow stats={stats} />

      <section id="about" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>About me</h2>
        </div>
        <div className={styles.aboutContent}>
          <p className={styles.aboutText}>
            I&apos;m a recent B.Sc. graduate in Computer Science and Engineering from
            American International University-Bangladesh (AIUB), where I maintained a
            consistent Dean&apos;s List record and received the Best Thesis Poster Award.
          </p>
          <p className={styles.aboutText}>
            I have a strong foundation in core CS theory and practical software development,
            combined with hands-on industry experience as a Web Development Intern at
            Battery Low Interactive Ltd., where I worked with React, Node.js, and PostgreSQL.
          </p>
          <p className={styles.aboutText}>
            Fluent in Bengali and English, I have a genuine interest in teaching, mentoring,
            and contributing to curriculum-driven, project-based CS education. I&apos;m passionate
            about software development, AI/ML, and building impactful digital experiences.
          </p>
        </div>
      </section>

      <section id="experience" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Experience</h2>
        </div>
        <div className={styles.experienceContent}>

          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h3 className={styles.experienceTitle}>Web Development Intern</h3>
              <span className={styles.experienceDate}>2024</span>
            </div>
            <div className={styles.experienceCompany}>Battery Low Interactive Ltd.</div>
            <ul className={styles.experienceList}>
              <li>
                Contributed to the design and development of web applications using{' '}
                <strong style={{ color: 'var(--text)' }}>React, Node.js, and PostgreSQL</strong>{' '}
                as part of a professional development team.
              </li>
              <li>
                Translated product requirements into working features, collaborating closely
                with senior developers in an agile workflow.
              </li>
              <li>
                Gained applied experience with REST APIs, component-based architecture,
                and database-driven UIs.
              </li>
            </ul>
            <div className={styles.experienceTechBadge}>
              <span className={styles.badge}>React</span>
              <span className={styles.badge}>Node.js</span>
              <span className={styles.badge}>PostgreSQL</span>
              <span className={styles.badge}>REST API</span>
            </div>
          </div>

        </div>
      </section>

      <ExpertiseSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer socialLinks={socialLinks} />
    </>
  );
}
