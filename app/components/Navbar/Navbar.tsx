import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      {/* <div className={styles.logo}>
        ARC<span className={styles.accent}>.</span>
      </div> */}
      <div className={styles.logo}>
        Ashfaqur Rahman Chowdhury<span className={styles.accent}>.</span>
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#expertise">Expertise</a></li>
        <li><a href="#skills">Skills</a></li>
      </ul>
      <a href="mailto:ashfaq17407@gmail.com" className={styles.navCta}>
        Hire me
      </a>
    </nav>
  );
}
