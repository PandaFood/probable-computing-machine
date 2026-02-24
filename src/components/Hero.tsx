import { Link } from 'react-router-dom';
import Monogram from './Monogram';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Monogram />
      <h1 className={styles.names}>Stanislava Borisova &amp; Jonathan Brorsson</h1>
      <p className={styles.date}>2026 · 8 · 15</p>
      <Link to="/rsvp" className={styles.rsvpButton}>RSVP</Link>
      <div className={styles.welcomeText}>
        We're getting married in Prešov, Slovakia — and we'd love for you to be there.
        We know travelling isn't always easy, so we've put together everything you need
        to make the journey as smooth as possible. We can't wait to celebrate with you.
      </div>
      <div className="divider" />
    </section>
  );
}
