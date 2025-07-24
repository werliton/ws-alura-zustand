import { useCallback } from "react";
import { useCronometroStore, useModo } from "../../../../store";
import styles from "./styles.module.css";
export default function BotaoModo({ children, modoBotao }) {
  const setModo = useCronometroStore((state) => state.setModoCronometro);

  const activedMode = useModo().alias === modoBotao;

  const handleModo = useCallback(() => {
    setModo(modoBotao);
  }, [modoBotao, setModo]);

  return (
    <button
      className={`
        ${styles["cronometer-modes__button"]}
        ${activedMode ? styles["cronometer-modes__button--active"] : ""}
      `}
      onClick={handleModo}
    >
      {children}
    </button>
  );
}
