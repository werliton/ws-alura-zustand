import styles from "./styles.module.css";
import play_arrowImg from "/src/assets/imgs/play_arrow.png";
import pauseImg from "/src/assets/imgs/pause.png";
import audioPlaySom from "/src/assets/sons/play.wav";
import audioPauseSom from "/src/assets/sons/pause.mp3";
import { useCronometroStore } from "../../../store";

export default function BotaoCronometro() {
  const { iniciarCronometro, pararTempo, intervaloId } = useCronometroStore();

  const btnActions = [
    {
      action: () => iniciarCronometro(),
      text: "Começar",
      src: play_arrowImg,
    },
    {
      action: () => pararTempo(),
      text: "Parar",
      src: pauseImg,
    },
  ];

  const btnActive = btnActions[Number(!!intervaloId)];

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
