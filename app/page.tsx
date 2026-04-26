'use client';

import { useState } from 'react';
import styles from "./page.module.css";

const CAREER_START_YEAR = 2010; // Change this to your start year

export default function Home() {
  const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;
  const [expandedProjects, setExpandedProjects] = useState(false);

  const toggleProjects = () => {
    setExpandedProjects(!expandedProjects);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          Logo<span className={styles.accent}>.</span>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
        <a href="https://www.gmail.com/" className={styles.navCta}>  //Change to actual eamil
          Hire me
        </a>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.heroEyebrow}>DESIGNATION.....</div>
            <h1 className={styles.heroName}>
              NAME<br />
              <span className={styles.outline}>NAME</span>
            </h1>
            <p className={styles.heroDesc}>
              description line1<br />
              description line2
            </p>
            <div className={styles.heroActions}>
              <a href="#work" className={styles.btnPrimary}>
                View my work
              </a>
              <a href="/sample.pdf" className={styles.btnGhost}>
                Download CV <span className={styles.arrow}>↗</span>
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="/profile pic.png" alt="Profile" className={styles.heroImagePlaceholder} />
          </div>
        </div>
      </section>

      <div className={styles.statsRow}>
        <div>
          <div className={styles.statNum}>
            {yearsOfExperience}<span className={styles.accent}>+</span>
          </div>
          <div className={styles.statLabel}>Years experience</div>
        </div>
        <div>
          <div className={styles.statNum}>
            48<span className={styles.accent}>+</span>
          </div>
          <div className={styles.statLabel}>Projects delivered</div>
        </div>
        <div>
          <div className={styles.statNum}>
            32<span className={styles.accent}>+</span>
          </div>
          <div className={styles.statLabel}>Happy clients</div>
        </div>
        <div>
        </div>
      </div>

      <section id="about" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>About me</h2>
        </div>
        <div className={styles.aboutContent}>
          <p className={styles.aboutText}>
            I'm a passionate designer and developer with a deep love for creating meaningful digital experiences. 
            With {yearsOfExperience}+ years in the industry,...
          </p>
          <p className={styles.aboutText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ut aliquid delectus officiis ab temporibus doloremque nemo recusandae itaque magnam corporis, illum perspiciatis assumenda dolorem inventore harum nulla voluptatibus magni.
          </p>
          <p className={styles.aboutText}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime obcaecati quasi aliquid vero. Veritatis, dolor vel aperiam voluptates sunt repellat optio praesentium adipisci modi, animi recusandae fugiat quae velit qui?
          </p>
        </div>
      </section>

      <section id="work" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Selected work</h2>
          <button 
            onClick={toggleProjects}
            className={`${styles.sectionLink} ${expandedProjects ? styles.sectionLinkActive : ''}`}
            style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
          >
            {expandedProjects ? "Hide projects" : "All projects"} 
            <span className={expandedProjects ? styles.arrowRotate : ''}>→</span>
          </button>
        </div>
        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <div className={styles.projectArrow}>↗</div>
            <div className={styles.projectNum}>01</div>
            <div className={`${styles.projectImg} ${styles.p1}`}>🌿</div>
            <span className={styles.projectTag}>Branding · Web</span>
            <div className={styles.projectTitle}>Verde Studio Redesign</div>
            <div className={styles.projectDesc}>
              A full rebrand for a sustainable architecture firm.
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.projectArrow}>↗</div>
            <div className={styles.projectNum}>02</div>
            <div className={`${styles.projectImg} ${styles.p2}`}>🌐</div>
            <span className={styles.projectTag}>Product · SaaS</span>
            <div className={styles.projectTitle}>Pulsar Dashboard</div>
            <div className={styles.projectDesc}>
              Analytics platform for real-time data monitoring.
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.projectArrow}>↗</div>
            <div className={styles.projectNum}>03</div>
            <div className={`${styles.projectImg} ${styles.p3}`}>🎨</div>
            <span className={styles.projectTag}>App · iOS</span>
            <div className={styles.projectTitle}>Hue Color System</div>
            <div className={styles.projectDesc}>
              Mobile-first design tool for creative professionals.
            </div>
          </div>

          {expandedProjects && (
            <>
              <div className={`${styles.projectCard} ${styles.projectCardExpand}`} style={{ animationDelay: '0.1s' }}>
                <div className={styles.projectArrow}>↗</div>
                <div className={styles.projectNum}>04</div>
                <div className={`${styles.projectImg} ${styles.p1}`}>🚀</div>
                <span className={styles.projectTag}>Product · Web</span>
                <div className={styles.projectTitle}>Stellar App Platform</div>
                <div className={styles.projectDesc}>
                  Cloud-based project management for distributed teams.
                </div>
              </div>

              <div className={`${styles.projectCard} ${styles.projectCardExpand}`} style={{ animationDelay: '0.2s' }}>
                <div className={styles.projectArrow}>↗</div>
                <div className={styles.projectNum}>05</div>
                <div className={`${styles.projectImg} ${styles.p2}`}>🎬</div>
                <span className={styles.projectTag}>Branding · Motion</span>
                <div className={styles.projectTitle}>Cinematic Brand Kit</div>
                <div className={styles.projectDesc}>
                  Video-first branding system for creative studios.
                </div>
              </div>

              <div className={`${styles.projectCard} ${styles.projectCardExpand}`} style={{ animationDelay: '0.3s' }}>
                <div className={styles.projectArrow}>↗</div>
                <div className={styles.projectNum}>06</div>
                <div className={`${styles.projectImg} ${styles.p3}`}>📊</div>
                <span className={styles.projectTag}>Analytics · AI</span>
                <div className={styles.projectTitle}>DataMind Analytics</div>
                <div className={styles.projectDesc}>
                  AI-powered insights platform for business intelligence.
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <section id="skills" className={`${styles.section} ${styles.skillsSection}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Skills</h2>
        </div>
        <div className={styles.skillsGrid}>
          <div className={styles.skillItem}>
            <div className={styles.skillIcon}>✦</div>
            <div className={styles.skillName}>UI Design</div>
            <div className={styles.skillLevel}>Expert</div>
            <div className={styles.skillBar}>
              <div className={styles.skillFill} style={{ width: "95%" }}></div>
            </div>
          </div>

          <div className={styles.skillItem}>
            <div className={styles.skillIcon}>◈</div>
            <div className={styles.skillName}>Figma</div>
            <div className={styles.skillLevel}>Expert</div>
            <div className={styles.skillBar}>
              <div className={styles.skillFill} style={{ width: "92%" }}></div>
            </div>
          </div>

          <div className={styles.skillItem}>
            <div className={styles.skillIcon}>⟨⟩</div>
            <div className={styles.skillName}>Game Development</div>
            <div className={styles.skillLevel}>Advanced</div>
            <div className={styles.skillBar}>
              <div className={styles.skillFill} style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className={styles.skillItem}>
            <div className={styles.skillIcon}>◎</div>
            <div className={styles.skillName}>Motion Design</div>
            <div className={styles.skillLevel}>Intermediate</div>
            <div className={styles.skillBar}>
              <div className={styles.skillFill} style={{ width: "70%" }}></div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>© 2026 .....</div>
        <div className={styles.socialLinks}>
          <a href="#">Unity Play</a>
          <a href="https://www.linkedin.com/in/">LinkedIn</a>
          <a href="https://github.com/">GitHub</a>
          <a href="#">Any Social</a>
        </div>
      </footer>
    </>
  );
}
