import { useCallback } from "react";
import { useStopWatchStore } from "../../../../store";
import styles from "./styles.module.css";

export default function BotaoModo({ children, modoBotao }) {
  const { setMode, activedMode } = useStopWatchStore();

  const _activedMode = activedMode.alias === modoBotao;

  const handleModo = useCallback(() => {
    setMode(modoBotao);
  }, [modoBotao, setMode]);

  return (
    <button
      className={`
        ${styles["cronometer-modes__button"]}
        ${_activedMode ? styles["cronometer-modes__button--active"] : ""}
      `}
      onClick={handleModo}
    >
      {children}
    </button>
  );
}
