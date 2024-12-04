import styles from './banner.module.css';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image src={'/img/cover.jpg'} alt="cover" fill={true} objectFit="cover" />
      <div className={styles.bannerText}>
        <h1>Vaccine Service Center</h1>
        <h3>Be Safe with Us</h3>
      </div>
    </div>
  );
}
