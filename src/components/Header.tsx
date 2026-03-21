import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Monogram from './Monogram';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight * 0.20;
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Link to="/" className={styles.logo}><Monogram /></Link>
      <nav className={styles.nav}>
        <Link to="/schedule">Schedule</Link>
        <Link to="/travel">Travel Tips</Link>
        <Link to="/gifts">Gifts</Link>
        <Link to="/slovak">Slovak Language</Link>
        <Link to="/tourism">Tourism</Link>
        <Link to="/rsvp">RSVP</Link>
      </nav>
    </header>
  );
}
