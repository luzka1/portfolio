import styles from "./styles.module.css";
import logo from "../../assets/images/logo.svg";
import brasil from "../../assets/images/brasil.svg";
import arrow from "../../assets/images/arrow.svg";
import close from '../../assets/images/close.svg';
import { useWindowSize } from "../../data";
import { useRef } from "react";

export const Header = () => {
  const { width } = useWindowSize();
  const headerRef = useRef<HTMLElement>(null);

  const showHeader = () => {
    if (headerRef.current) {
      headerRef.current.classList.toggle(styles.responsiveHeader);
    }
  }

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
      <div className={styles.innerHeader} >
        <img src={logo} alt="logo" />
        <button className={styles.btnHeader} onClick={showHeader}>&#9776;</button>
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
            <button className={styles.btnHeaderClose} onClick={showHeader}><img src={close} alt="close button"/></button>
          </div>
      </div>
    </header>
  );
};
