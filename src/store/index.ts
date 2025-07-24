import { create } from "zustand";

/** @ts-ignore */
import audioPlaySom from "../assets/sons/play.wav";
/** @ts-ignore */
import audioPauseSom from "../assets/sons/pause.mp3";

export enum MODO_CRONOMETRO {
  FOCO = "FOCO",
  DESCANSO_CURTO = "DESCANSO CURTO",
  DESCANSO_LONGO = "DESCANSO LONGO",
}

export type Cronometro = {
  id: string;
  nome: string;
  frases: string[];
  duracaoInicialSec: number;
  alias?: string;
};

type CronometroType = Record<MODO_CRONOMETRO, Cronometro>;

const audioPlay = new Audio(audioPlaySom);
const audioPause = new Audio(audioPauseSom);

export const MODO_CRONOMETRO_STATE: CronometroType = {
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

interface CronometroState {
  modoCronometro: Cronometro;
  setModoCronometro: (modo: MODO_CRONOMETRO) => void;
  tempoInicialSec: number;
  intervaloId: number | null;
  resetTempo(): void;
  decrementTempo(): void;
  iniciarCronometro(): void;
  pararTempo(): void;
}

export const useCronometroStore = create<CronometroState>()((set, get) => {
  const contagemRegressiva = () => {
    const { tempoInicialSec, decrementTempo, pararTempo } = get();
    if (tempoInicialSec > 0) {
      decrementTempo();
    } else {
      pararTempo();
    }
  };

  return {
    modoCronometro: MODO_CRONOMETRO_STATE.FOCO,
    tempoInicialSec: MODO_CRONOMETRO_STATE.FOCO.duracaoInicialSec,
    intervaloId: null,
    setModoCronometro: (modo: MODO_CRONOMETRO) =>
      set({
        modoCronometro: MODO_CRONOMETRO_STATE[modo],
        tempoInicialSec: MODO_CRONOMETRO_STATE[modo].duracaoInicialSec,
      }),
    iniciarCronometro: () => {
      // definir um setinteval
      audioPlay.play();
      const novoIntervalId = setInterval(contagemRegressiva, 1000);
      // recuperar e salvar o intervaloId
      set({
        intervaloId: novoIntervalId,
      });
    },
    resetTempo: () => {
      const { intervaloId } = get();

      if (intervaloId) {
        clearInterval(intervaloId);
        set({
          tempoInicialSec: get().modoCronometro.duracaoInicialSec,
          intervaloId: null,
        });
      }
    },
    decrementTempo: () => {
      set({
        tempoInicialSec: get().tempoInicialSec - 1,
      });
    },
    pararTempo: () => {
      const { intervaloId } = get();

      if (intervaloId) {
        audioPause.play();
        clearInterval(intervaloId);
        set({
          intervaloId: null,
        });
      }
    },
  };
});

export const useModo = () => useCronometroStore((state) => state.modoCronometro);
export const useTempoInicial = () => useCronometroStore((state) => state.tempoInicialSec);
export const useIntervalId = () => useCronometroStore((state) => state.intervaloId);

export * from "./stopwatch.store";
