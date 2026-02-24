import styles from './ImageBanner.module.css';
import usPhoto from '../assets/us.jpeg';

export default function ImageBanner() {
  return (
    <div className={styles.imageSection}>
      <img src={usPhoto} alt="Stanislava and Jonathan" />
    </div>
  );
}
