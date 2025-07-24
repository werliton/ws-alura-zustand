import styles from "./styles.module.css";

import BotoesModos from "./BotoesModos";
import Timer from "./Timer";
import SwitchMusica from "./SwitchMusica";
import BotaoCronometro from "./BotaoCronometro";
import { useCountdownTime } from "../../store";

export default function Cronometro() {
  const countdowntime = useCountdownTime();

  return (
    <div className={styles["cronometer"]}>
      <BotoesModos />

      <Timer time={countdowntime} />

      <SwitchMusica />

      <BotaoCronometro />
    </div>
  );
}
