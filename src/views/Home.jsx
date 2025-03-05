import styles from "./Home.module.css";
import heroImage from "../assets/hero-travel.jpg";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Your Travel Assistant</h1>
          <p className={styles.heroText}>
            Discover your ideal holiday destination and make the right choice
            for you.
          </p>
          <button className={styles.PrimaryButton}>
            <Link to="forwards" style={{ color: "white" }}>
              Choose destination
            </Link>
          </button>
        </div>
      </div>

      {/* Website Description */}
      <section className={styles.section}>
        <div className={styles.sectionTop}>
          <h4 className={styles.sectionTopName}>ABOUT US</h4>
          <h2 className={styles.sectionTitle}>
            What is purpose of our website?
          </h2>
        </div>
        <p className={styles.sectionText}>
          Our platform is designed to help you discover a wide variety of travel
          destinations, providing insights into each location, and how well it
          matches your unique preferences. Whether you're seeking thrilling
          adventures, a peaceful retreat for relaxation, or rich cultural
          experiences, we offer recommendations to guide you toward the best
          destinations.
        </p>
      </section>

      {/* Main Functions */}
      <section className={styles.section}>
        <div className={styles.sectionTop}>
          <h4 className={styles.sectionTopName}>WE OFFER</h4>
          <h2 className={styles.sectionTitle}>How can we help you?</h2>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <Link to="forwards">
              <img
                className={styles.cardImage}
                src={card1}
                alt="Destination 1"
              />
              <div className={styles.cardContent}>
                <h1>Travel Help</h1>
                <h3 className={styles.cardTitle}>
                  Find the best destination based on your preferences
                </h3>
              </div>
            </Link>
          </div>

          <div className={styles.card}>
            <Link to="backwards">
              <img
                className={styles.cardImage}
                src={card2}
                alt="Destination 2"
              />
              <div className={styles.cardContent}>
                <h1>Travel Guide</h1>
                <h3 className={styles.cardTitle}>
                  Check if your destination is the right choice
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
