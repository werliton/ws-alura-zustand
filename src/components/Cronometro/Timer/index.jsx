import styles from "./styles.module.css";

export default function Timer({ time }) {
  const dateTime = new Date(time * 1000);
  const formattedTime = dateTime.toLocaleTimeString("pt-BR", {
    minute: "2-digit",
    second: "2-digit",
  });

  return <div className={styles["cronometer-timer"]}>{formattedTime}</div>;
}
