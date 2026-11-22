import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <div className={styles.heroEyebrow}>Full Stack Web Developer · ML Researcher</div>
          <h1 className={styles.heroName}>
            Ashfaqur Rahman<br />
            <span className={styles.outline}>Chowdhury</span>
          </h1>
          <p className={styles.heroDesc}>
            <span className={styles.hl}>M.Sc. in Computer Science</span> (Ongoing) · <span className={styles.hl}>B.Sc. in CSE</span>,
            CGPA <span className={styles.hl}>3.96/4.00</span><br />
            <span className={styles.hl}>Dean&apos;s List Awardee</span> · Researching{' '}
            <span className={styles.hlUnderline}>self-supervised learning for financial time series</span>.
          </p>
          <div className={styles.heroActions}>
            <a href="#work" className={styles.btnPrimary}>
              View my work
            </a>
            <a href="/sample.pdf" className={styles.btnGhost} target="_blank" rel="noopener noreferrer">
              Download CV <span className={styles.arrow}>↗</span>
            </a>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src="/Screenshot 2023-10-07 dp2.png"
            alt="Ashfaqur Rahman Chowdhury"
            className={styles.heroImagePlaceholder}
          />
        </div>
      </div>
    </section>
  );
}
