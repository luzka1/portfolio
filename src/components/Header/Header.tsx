import styles from "./styles.module.css";
import logo from "../../assets/images/logo.svg";
import brasil from "../../assets/images/brasil.svg";
import arrow from "../../assets/images/arrow.svg";

export const Header = () => {
  return (
    <header>
      <div className={styles.innerHeader}>
        <img src={logo} alt="logo" />
        <div>
          <div> Sobre Mim </div>
          <div> Projetos </div>
          <div> Contato </div>
          <div>
            <img src={brasil} alt="bandeira do brasil" />
            <span>PT-BR</span>
            <img src={arrow} alt="seta" />
          </div>
        </div>
      </div>
    </header>
  );
};
