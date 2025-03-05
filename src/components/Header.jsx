import { Link } from "react-router-dom";
import styles from "./Header.module.css"; 
import logo from "../assets/logo.png"; 

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
      <Link to=""><img src={logo} alt="New Horizon Logo" className={styles.logo} /></Link>
        <span className={styles.brandName}>New Horizon</span>
      </div>
      <nav className={styles.nav}>
        <p><Link to="">Home</Link></p>
        <p><Link to="forwards">Travel Help</Link></p>
        <p><Link to="backwards">Travel Guide</Link></p>
      </nav>
      
    </header>
  );
}

