import styles from './Section.module.css';

export default function Gifts() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">Gifts</h2>
      <div className="divider" />
      <div className={styles.prose}>
        <p>
          Your presence at our wedding is the greatest gift we could ask for.
          We are fully aware that travelling to Slovakia is no small commitment.
          The time, effort, and cost of making that journey means the world to us,
          and we would never want you to feel any additional obligation.
        </p>
      </div>
    </section>
  );
}
