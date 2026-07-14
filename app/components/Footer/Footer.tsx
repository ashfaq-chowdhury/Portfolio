import { SocialLink } from '../../types';
import styles from './Footer.module.css';

interface FooterProps {
  socialLinks: SocialLink[];
}

export default function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div>© 2026 .....</div>
      <div className={styles.socialLinks}>
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url}>{link.name}</a>
        ))}
      </div>
    </footer>
  );
}
