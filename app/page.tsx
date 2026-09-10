import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import StatsRow from './components/StatsRow/StatsRow';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import Footer from './components/Footer/Footer';
import { Stat, SocialLink } from './types';
import styles from './page.module.css';

const CAREER_START_YEAR = 2010; // Change this to your start year

const stats: Stat[] = [
  { value: new Date().getFullYear() - CAREER_START_YEAR, label: "Years experience" },
  { value: 48, label: "Projects delivered" },
  { value: 32, label: "Happy clients" },
];

const socialLinks: SocialLink[] = [
  { name: "Unity Play", url: "#" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/" },
  { name: "GitHub", url: "https://github.com/" },
  { name: "Any Social", url: "#" },
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
            I&apos;m a passionate designer and developer with a deep love for creating meaningful digital experiences.
            With {new Date().getFullYear() - CAREER_START_YEAR}+ years in the industry,...
          </p>
          <p className={styles.aboutText}>
            I have a strong foundation in core CS theory and practical software development, combined with hands-on industry experience as a Web Development Intern.
          </p>
          <p className={styles.aboutText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime obcaecati quasi aliquid vero. Veritatis, dolor vel aperiam voluptates sunt repellat optio praesentium adipisci modi, animi recusandae fugiat quae velit qui?
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
              <span className={styles.experienceDate}>Recent</span>
            </div>
            <div className={styles.experienceCompany}>Battery Low Interactive Ltd.</div>
            <ul className={styles.experienceList}>
              <li>Contributed to the design and development of web applications using <strong style={{ color: 'var(--text)' }}>React, Node.js, and PostgreSQL</strong> as part of a professional development team.</li>
              <li>Gained applied experience translating requirements into working features — directly relevant to explaining real-world software development practices to students.</li>
            </ul>
          </div>
        </div>
      </section>

      <ProjectsSection />
      <SkillsSection />
      <Footer socialLinks={socialLinks} />
    </>
  );
}
