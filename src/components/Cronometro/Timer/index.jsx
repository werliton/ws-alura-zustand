import styles from "./styles.module.css";

export default function Timer({ time }) {
  return <div className={styles["cronometer-timer"]}>{time}</div>;
}
