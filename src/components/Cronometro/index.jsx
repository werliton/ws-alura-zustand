import styles from "./styles.module.css";

import BotoesModos from "./BotoesModos";
import Timer from "./Timer";
import SwitchMusica from "./SwitchMusica";
import BotaoCronometro from "./BotaoCronometro";
import { useTempoInicial } from "../../store";

export default function Cronometro() {
  const tempo = useTempoInicial();

  return (
    <div className={styles["cronometer"]}>
      <BotoesModos />

      <Timer time={tempo} />

      <SwitchMusica />

      <BotaoCronometro />
    </div>
  );
}
