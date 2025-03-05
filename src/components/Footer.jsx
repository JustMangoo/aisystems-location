
import styles from "./Footer.module.css"; // Import CSS module

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} New Horizon Travel. All rights reserved.</p>
      <p>Contact: contact@newhorizontravel.com | +1 (555) 123-4567</p>
    </footer>
  );
}
