import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>S J</Link>
      <nav className={styles.nav}>
        <Link to="/schedule">Schedule</Link>
        <Link to="/travel">Travel Tips</Link>
        <Link to="/gifts">Gifts</Link>
        <Link to="/rsvp">RSVP</Link>
      </nav>
    </header>
  );
}
