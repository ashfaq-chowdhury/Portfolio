import styles from './Hero.module.css';

export default function Hero() {
  return (
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
  );
}
