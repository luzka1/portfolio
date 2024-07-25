import styles from "./styles.module.css";
import logo from "../../assets/images/logo.svg";
import brasil from "../../assets/images/brasil.svg";
import arrow from "../../assets/images/arrow.svg";

export const Header = () => {
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
    <header>
      <div className={styles.innerHeader}>
        <img src={logo} alt="logo" />
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
        </div>
      </div>
    </header>
  );
};
