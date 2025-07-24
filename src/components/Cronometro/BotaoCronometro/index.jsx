import styles from "./styles.module.css";
import play_arrowImg from "/src/assets/imgs/play_arrow.png";
import pauseImg from "/src/assets/imgs/pause.png";
import { useStopWatchStore } from "../../../store";

export default function BotaoCronometro() {
  const { isStarted, start, pause } = useStopWatchStore();

  const btnActions = [
    {
      action: () => start(),
      text: "Começar",
      src: play_arrowImg,
    },
    {
      action: () => pause(),
      text: "Parar",
      src: pauseImg,
    },
  ];

  const btnActive = btnActions[Number(!!isStarted)];

  return (
    <div className={styles["cronometer__primary-button-wrapper"]}>
      <button className={styles["cronometer__primary-button"]} onClick={btnActive.action}>
        <img
          className={styles["cronometer__primary-button-icon"]}
          src={btnActive.src}
          alt={btnActive.text}
        />
        <span>{btnActive.text}</span>
      </button>
    </div>
  );
}
