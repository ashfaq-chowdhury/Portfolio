import { SocialLink } from '../../types';
import styles from './Footer.module.css';

interface FooterProps {
  socialLinks: SocialLink[];
}

export default function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div>© {new Date().getFullYear()} Ashfaqur Rahman Chowdhury</div>
      <div className={styles.socialLinks}>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target={link.url.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
