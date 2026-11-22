'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';

const links = [
  { href: '#work', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#research', label: 'Research' },
  { href: '#experience', label: 'Experience' },
  { href: '#awards', label: 'Awards' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#skills', label: 'Skills' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        Ashfaqur Rahman Chowdhury<span className={styles.accent}>.</span>
      </div>

      <button
        className={`${styles.menuToggle} ${open ? styles.menuToggleOpen : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`${styles.navLinks} ${open ? styles.navLinksOpen : ''}`}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          </li>
        ))}
        <li className={styles.mobileCta}>
          <a href="mailto:ashfaq17407@gmail.com" className={styles.navCta} onClick={() => setOpen(false)}>
            Hire me
          </a>
        </li>
      </ul>

      <a href="mailto:ashfaq17407@gmail.com" className={`${styles.navCta} ${styles.desktopCta}`}>
        Hire me
      </a>
    </nav>
  );
}
