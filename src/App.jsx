import styles from "./App.module.css";

import Cabecalho from "./components/Cabecalho";
import Cronometro from "./components/Cronometro";
import ListaDeTarefas from "./components/ListaDeTarefas";
import Rodape from "./components/Rodape";
import { useGetActivedMode } from "./store";

function App() {
  const { id } = useGetActivedMode();

  return (
    <div className={styles[`app--${id}`]}>
      <Cabecalho />

      <main>
        <Cronometro />

        <ListaDeTarefas />
      </main>

      <Rodape />
    </div>
  );
}

export default App;
