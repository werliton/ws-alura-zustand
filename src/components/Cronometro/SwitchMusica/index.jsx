import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import musicaSom from "/src/assets/sons/luna-rise-part-one.mp3";
import { useStopWatchStore } from "../../../store";

export default function SwitchMusica() {
  const musicaRef = useRef(new Audio(musicaSom));
  const { toggleActiveMusic, isPlayMusic } = useStopWatchStore();

  function alternarMusica() {
    const musica = musicaRef.current;
    toggleActiveMusic();

    if (musica.paused || isPlayMusic) {
      musica.play();
    } else {
      musica.pause();
    }
  }

  useEffect(() => {
    const musicaElement = musicaRef.current;

    return () => {
      musicaElement.pause();
    };
  }, []);

  useEffect(() => {
    if (!isPlayMusic) {
      musicaRef.current.pause();
    }
  }, [isPlayMusic]);

  return (
    <label className={styles["toggle"]}>
      <input
        onChange={alternarMusica}
        className={styles["toggle__checkbox"]}
        type="checkbox"
        id="alternar-musica"
        checked={isPlayMusic}
      />

      <div className={styles["toggle__switch"]}></div>

      <span className={styles["toggle__span"]} htmlFor="alternar-musica">
        Música
      </span>
    </label>
  );
}
