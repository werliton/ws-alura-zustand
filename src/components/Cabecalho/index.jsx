import styles from "./styles.module.css";
import logoImg from "/src/assets/imgs/logo.png";
import focoImg from "/src/assets/imgs/foco.png";
import descansoCurtoImg from "/src/assets/imgs/descanso-curto.png";
import descansoLongoImg from "/src/assets/imgs/descanso-longo.png";
import { useGetActivedMode } from "../../store";

export default function Cabecalho() {
  const { frases, alias } = useGetActivedMode();

  const BGIMG = {
    FOCO: {
      path: focoImg,
    },
    "DESCANSO CURTO": {
      path: descansoCurtoImg,
    },
    "DESCANSO LONGO": {
      path: descansoLongoImg,
    },
  };

  const [primeiroTexto, segundoTexto] = frases;
  const selectedImg = BGIMG[alias].path ?? focoImg;

  return (
    <header className="header">
      <figure className={styles["header__logo-figure"]}>
        <img src={logoImg} alt="Logotipo do Fokus" />
      </figure>

      <section className={styles["header__section-banner-container"]}>
        <h1 className={styles["header__title"]}>
          {primeiroTexto} <strong className={styles["header__title-strong"]}>{segundoTexto}</strong>
        </h1>

        <figure className={styles["header__image-figure"]}>
          <img className={styles["header__image"]} src={selectedImg} alt={alias} />
        </figure>
      </section>
    </header>
  );
}
