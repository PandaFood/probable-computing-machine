import styles from './Section.module.css';

export default function Schedule() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">Schedule</h2>
      <div className="divider" />
      <p className={styles.comingSoon}>Coming Soon</p>
    </section>
  );
}
