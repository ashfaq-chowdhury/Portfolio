import styles from './Navbar.module.css';

export default function Navbar() {
  return (
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
      {/* Change to actual email */}
      <a href="https://www.gmail.com/" className={styles.navCta}>
        Hire me
      </a>
    </nav>
  );
}
