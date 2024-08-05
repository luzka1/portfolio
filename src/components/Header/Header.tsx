import styles from "./styles.module.css";
import logo from "../../assets/images/logo.svg";
import brasil from "../../assets/images/brasil.svg";
import arrow from "../../assets/images/arrow.svg";
import close from "../../assets/images/close.svg";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);

  const toHomePage = () => {
    navigate("/");
  };

  const showHeader = () => {
    if (headerRef.current) {
      headerRef.current.classList.toggle(styles.responsiveHeader);
    }
  };

  const linksHeader = [
    {
      name: "Sobre Mim",
      linkTo: "#about-me",
    },
    {
      name: "Projetos",
      linkTo: "#projects",
    },
    {
      name: "Contato",
      linkTo: "#contact-me",
    },
  ];
  return (
    <header ref={headerRef}>
      <div className={styles.innerHeader}>
        <img src={logo} alt="logo" onClick={toHomePage} />
        <button className={styles.btnHeader} onClick={showHeader}>
          &#9776;
        </button>
        <div>
          {linksHeader.map((item, id) => (
            <a key={id} href={item.linkTo}>
              {item.name}
            </a>
          ))}
          <div>
            <img src={brasil} alt="bandeira do brasil" />
            <span>PT-BR</span>
            <img src={arrow} alt="seta" />
          </div>
          <button className={styles.btnHeaderClose} onClick={showHeader}>
            <img src={close} alt="close button" />
          </button>
        </div>
      </div>
    </header>
  );
};
