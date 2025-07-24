import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import musicaSom from "/src/assets/sons/luna-rise-part-one.mp3";
import { useStopWatchStore } from "../../../store";

export default function SwitchMusica() {
  const musicaRef = useRef(null);
  const { toggleActiveMusic, isPlayMusic } = useStopWatchStore();

  useEffect(() => {
    musicaRef.current = new Audio(musicaSom);

    return () => {
      musicaRef.current?.pause();
      musicaRef.current = null;
    };
  }, [musicaRef]);

  function alternarMusica() {
    toggleActiveMusic();

    const musica = musicaRef.current;

    if (musica.paused || isPlayMusic) {
      musica.play();
    } else {
      musica.pause();
    }
  }

  useEffect(() => {
    if (!isPlayMusic) {
      musicaRef.current.pause();
    }
  }, [isPlayMusic, musicaRef]);

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
