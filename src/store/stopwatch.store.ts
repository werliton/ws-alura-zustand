import { create } from "zustand";

/** types */
enum STOPWATCH_MODE {
  FOCO = "FOCO",
  DESCANSO_CURTO = "DESCANSO CURTO",
  DESCANSO_LONGO = "DESCANSO LONGO",
}

export type STOPWATCH = {
  id: string;
  nome: string;
  frases: string[];
  duracaoInicialSec: number;
  alias?: string;
};

interface StopWatchStoreState {
  stop(): void;
  start(): void;
  pause(): void;
  reset(): void;
  enableMusic: () => void;
  countdowntime: number;
  intervalId: number;
  isPlayMusic: boolean;
  isStarted: boolean;
  activedMode: {};
}
/** end types */

const STOPWATCH_MODE_STATE: Record<STOPWATCH_MODE, STOPWATCH> = {
  FOCO: {
    id: "foco",
    alias: "FOCO",
    nome: "Período de foco",
    frases: ["Concentre-se no que importa.", "Cada minuto conta.", "Mantenha o foco e avance."],
    duracaoInicialSec: 25,
  },
  "DESCANSO CURTO": {
    id: "descanso-curto",
    alias: "DESCANSO CURTO",
    nome: "Período de descanso curto",
    frases: ["Relaxe um pouco.", "Respire fundo.", "Prepare-se para o próximo foco."],
    duracaoInicialSec: 5,
  },
  "DESCANSO LONGO": {
    id: "descanso-longo",
    alias: "DESCANSO LONGO",
    nome: "Período de descanso longo",
    frases: ["Hora de uma pausa maior.", "Descanse e recarregue.", "Você merece esse tempo."],
    duracaoInicialSec: 15,
  },
};

export const useStopWatchStore = create<StopWatchStoreState>()((set, get) => {
  const playMusic = () => {
    const audio = new Audio("../assets/sons/play.wav");
    audio.loop = true;
    audio.play();
  };

  const pauseMusic = () => {
    const audio = new Audio("../assets/sons/pause.mp3");
    audio.pause();
  };

  const runStopWatch = () => {
    const { countdowntime } = get();

    if (countdowntime > 0) {
      decrementCountdowntime();
    } else {
      //stop
    }
  };

  const decrementCountdowntime = () => {
    set({
      countdowntime: get().countdowntime - 1,
    });
  };

  return {
    activedMode: STOPWATCH_MODE_STATE.FOCO,
    countdowntime: STOPWATCH_MODE_STATE.FOCO.duracaoInicialSec,
    intervalId: 0,
    isPlayMusic: false,
    isStarted: false,
    start: () => {
      const _intervalId = setInterval(runStopWatch, 1000);

      set({
        intervalId: _intervalId,
        isStarted: true,
      });
    },
    stop: () => {
      set({
        isStarted: false,
      });
    },
    pause: () => {},
    reset: () => {},
  };
});

// selectors

// implementar a decisao de exibir o intervalid auqi

export const useCountdownTime = () => useStopWatchStore((state) => state.countdowntime);
