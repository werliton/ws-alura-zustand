import { create } from "zustand";

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
};

type CronometroType = Record<MODO_CRONOMETRO, Cronometro>;

export const MODO_CRONOMETRO_STATE: CronometroType = {
  FOCO: {
    id: "FOCO",
    nome: "Período de foco",
    frases: ["Concentre-se no que importa.", "Cada minuto conta.", "Mantenha o foco e avance."],
    duracaoInicialSec: 25,
  },
  "DESCANSO CURTO": {
    id: "DESCANSO CURTO",
    nome: "Período de descanso curto",
    frases: ["Relaxe um pouco.", "Respire fundo.", "Prepare-se para o próximo foco."],
    duracaoInicialSec: 5,
  },
  "DESCANSO LONGO": {
    id: "DESCANSO LONGO",
    nome: "Período de descanso longo",
    frases: ["Hora de uma pausa maior.", "Descanse e recarregue.", "Você merece esse tempo."],
    duracaoInicialSec: 15,
  },
};

interface CronometroState {
  modoCronometro: Cronometro;
  setModoCronometro: (modo: MODO_CRONOMETRO) => void;
}

export const useCronometroStore = create<CronometroState>()((set) => ({
  modoCronometro: MODO_CRONOMETRO_STATE.FOCO,
  setModoCronometro: (modo: MODO_CRONOMETRO) =>
    set({ modoCronometro: MODO_CRONOMETRO_STATE[modo] }),
}));

export const useModo = () => useCronometroStore((state) => state.modoCronometro);
