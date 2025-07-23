import styles from "./styles.module.css";

import BotoesModos from "./BotoesModos";
import Timer from "./Timer";
import SwitchMusica from "./SwitchMusica";
import BotaoCronometro from "./BotaoCronometro";
import { useModo } from "../../store";

export default function Cronometro() {
  const modo = useModo();

  return (
    <div className={styles["cronometer"]}>
      <BotoesModos />

      <Timer time={modo.duracaoInicialSec} />

      <SwitchMusica />

      <BotaoCronometro />
    </div>
  );
}
