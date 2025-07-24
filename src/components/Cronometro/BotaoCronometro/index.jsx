import styles from "./styles.module.css";
import play_arrowImg from "/src/assets/imgs/play_arrow.png";
import pauseImg from "/src/assets/imgs/pause.png";
import { useStopWatchStore } from "../../../store";

export default function BotaoCronometro() {
  const { currentMode, start, pause, reset } = useStopWatchStore();

  const btnActions = {
    start: {
      id: "start",
      action: () => start(),
      text: "Começar",
      src: play_arrowImg,
    },
    pause: {
      id: "pause",
      action: () => pause(),
      text: "Parar",
      src: pauseImg,
    },
    reset: {
      id: "reset",
      action: () => reset(),
      text: "Reiniciar",
      src: pauseImg,
    },
  };

  const btnActive = btnActions[currentMode];

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
