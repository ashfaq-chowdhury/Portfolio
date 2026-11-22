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

const education = [
  {
    degree: "M.Sc. in Computer Science — Ongoing",
    institution: "American International University-Bangladesh (AIUB)",
    date: "Sep 2026 – Present",
    result: null,
  },
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    date: "2022 – 2026",
    result: "CGPA: 3.96 / 4.00",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dhaka Residential Model College",
    date: "2019 – 2021",
    result: "GPA: 5.00 / 5.00",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Dhaka Residential Model College",
    date: "2017 – 2019",
    result: "GPA: 5.00 / 5.00",
  },
];

const awards = [
  {
    title: "Academic Scholarships",
    org: "American International University-Bangladesh",
    detail: "Awarded merit-based scholarships throughout the undergraduate program for academic excellence.",
  },
  {
    title: "Dean's List Award",
    org: "American International University-Bangladesh",
    detail: "Received Dean's List recognition for 3 consecutive semesters.",
  },
  {
    title: "Best Undergraduate Thesis Poster Award",
    org: "American International University-Bangladesh",
    detail: "Received the Best Thesis Poster Award in AI/ML in Finance.",
  },
];

const certificates = [
  {
    icon: "🖥️",
    title: "IT Essentials: PC Hardware and Software",
    issuer: "Cisco Networking Academy",
    detail: "Covered computer hardware components, assembly, operating system installation, troubleshooting, and fundamentals of networking and security.",
  },
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
            I&apos;m currently pursuing an M.Sc. in Computer Science at American International
            University-Bangladesh (AIUB), where I also completed my B.Sc. in Computer Science and
            Engineering with a CGPA of 3.96/4.00, earning Dean&apos;s List recognition, merit
            scholarships, and the Best Undergraduate Thesis Poster Award.
          </p>
          <p className={styles.aboutText}>
            My research focuses on self-supervised temporal representation learning for anomaly
            detection in financial time series. On the engineering side, I worked as a Web
            Development Intern at Battery Low Interactive Ltd., building event-ticketing backend
            APIs with Next.js, React, Node.js, and PostgreSQL.
          </p>
          <p className={styles.aboutText}>
            Fluent in Bengali and English, I have a genuine interest in teaching, mentoring,
            and contributing to curriculum-driven, project-based CS education. I&apos;m passionate
            about software development, machine learning, and building impactful digital experiences.
          </p>
        </div>
      </section>

      <section id="education" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Education</h2>
        </div>
        <div className={styles.timeline}>
          {education.map((item) => (
            <div key={item.degree} className={styles.timelineItem}>
              <div className={styles.experienceHeader}>
                <h3 className={styles.timelineTitle}>{item.degree}</h3>
                <span className={styles.experienceDate}>{item.date}</span>
              </div>
              <div className={styles.timelineSub}>{item.institution}</div>
              {item.result && <span className={styles.badge}>{item.result}</span>}
            </div>
          ))}
        </div>
      </section>

      <section id="research" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Research</h2>
        </div>
        <div className={styles.experienceContent}>
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h3 className={styles.experienceTitle}>Undergraduate Thesis — Co-author</h3>
              <span className={styles.experienceDate}>AIUB</span>
            </div>
            <div className={styles.experienceCompany}>
              Self-Supervised Temporal Representation Learning for Anomaly Detection in Financial Time Series
            </div>
            <ul className={styles.experienceList}>
              <li>
                Manuscript previously submitted to <em>Frontiers in Big Data</em>; currently
                undergoing revision for potential resubmission.
              </li>
              <li>
                Received the Best Undergraduate Thesis Poster Award in AI/ML in Finance.
              </li>
            </ul>
            <div className={styles.experienceTechBadge}>
              <span className={styles.badge}>Machine Learning</span>
              <span className={styles.badge}>Deep Learning</span>
              <span className={styles.badge}>Self-Supervised Learning</span>
              <span className={styles.badge}>Time-Series Analysis</span>
            </div>
          </div>
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
              <span className={styles.experienceDate}>Feb 2026 – May 2026</span>
            </div>
            <div className={styles.experienceCompany}>Battery Low Interactive Ltd.</div>
            <ul className={styles.experienceList}>
              <li>
                Developed event-ticketing backend APIs covering{' '}
                <strong style={{ color: 'var(--text)' }}>authentication, database integration, payments, and deployment</strong>.
              </li>
              <li>
                Performed QA testing to ensure reliability and correctness of features before release.
              </li>
              <li>
                Collaborated with a professional team using{' '}
                <strong style={{ color: 'var(--text)' }}>Next.js, React, Node.js, and PostgreSQL</strong>.
              </li>
            </ul>
            <div className={styles.experienceTechBadge}>
              <span className={styles.badge}>Next.js</span>
              <span className={styles.badge}>React</span>
              <span className={styles.badge}>Node.js</span>
              <span className={styles.badge}>PostgreSQL</span>
              <span className={styles.badge}>REST API</span>
              <span className={styles.badge}>QA Testing</span>
            </div>
          </div>

        </div>
      </section>

      <section id="awards" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Distinctions &amp; awards</h2>
        </div>
        <div className={styles.cardGrid}>
          {awards.map((award) => (
            <div key={award.title} className={styles.experienceItem}>
              <h3 className={styles.timelineTitle}>{award.title}</h3>
              <div className={styles.cardOrg}>{award.org}</div>
              <p className={styles.cardText}>{award.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="certificates" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Professional development</h2>
        </div>
        <div className={styles.cardGrid}>
          {certificates.map((cert) => (
            <div key={cert.title} className={`${styles.experienceItem} ${styles.certCard}`}>
              <div className={styles.certIcon}>{cert.icon}</div>
              <div>
                <h3 className={styles.timelineTitle}>{cert.title}</h3>
                <div className={styles.cardOrg}>{cert.issuer}</div>
                <p className={styles.cardText}>{cert.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ExpertiseSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer socialLinks={socialLinks} />
    </>
  );
}
