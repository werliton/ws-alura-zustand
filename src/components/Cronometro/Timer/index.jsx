import { formatTime } from "../../../utils";
import styles from "./styles.module.css";

export default function Timer({ time }) {
  const formattedTime = formatTime(time);
  return <div className={styles["cronometer-timer"]}>{formattedTime}</div>;
}
