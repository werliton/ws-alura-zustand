import styles from "./styles.module.css";
import BotaoModo from "./BotaoModo";
import { MODO_CRONOMETRO_STATE } from "../../../store";

export default function BotoesModos() {
  const MODOS = Object.entries(MODO_CRONOMETRO_STATE);

  const formattedModo = (modo) => {
    return modo.replace("-", " ").toLocaleUpperCase();
  };

  return (
    <ul className={styles["cronometer-modes"]}>
      {MODOS.map(([key, value]) => (
        <li key={key}>
          <BotaoModo modoBotao={key}>{formattedModo(value.id)}</BotaoModo>
        </li>
      ))}
    </ul>
  );
}
