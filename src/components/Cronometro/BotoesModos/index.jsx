import styles from "./styles.module.css";
import BotaoModo from "./BotaoModo";
import { MODO_CRONOMETRO_STATE } from "../../../store";

export default function BotoesModos() {
  const MODOS = Object.entries(MODO_CRONOMETRO_STATE);

  return (
    <ul className={styles["cronometer-modes"]}>
      {MODOS.map(([key, value]) => (
        <li key={key}>
          <BotaoModo modoBotao={key}>{value.id}</BotaoModo>
        </li>
      ))}
    </ul>
  );
}
