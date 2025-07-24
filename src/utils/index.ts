export const formatTime = (time: number) => {
  if (isNaN(time)) return "00:00";

  // Convertendo o tempo de segundos para milissegundos
  const _time = new Date(time * 1000);
  const formattedTime = _time.toLocaleTimeString("pt-BR", {
    minute: "2-digit",
    second: "2-digit",
  });

  return formattedTime;
};
