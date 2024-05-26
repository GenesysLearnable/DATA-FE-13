import styles from "./Card.module.css";

export default function Card({ children, backgroundImage }) {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
    </div>
  );
}
