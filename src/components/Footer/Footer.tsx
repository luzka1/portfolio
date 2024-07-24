import styles from "./styles.module.css";
import logo from "../../assets/images/logo.svg";

export const Footer = () => {
  const socialsIcons = [
    {
      alt: "github icon",
      description: require("../../assets/images/github.svg").default,
      href: "https://github.com/luzka1"
    },
    {
      alt: "linkedin icon",
      description: require("../../assets/images/linkedin.svg").default,
      href: "https://www.linkedin.com/in/lucas-santos-341856247/"
    },
    {
      alt: "email icon",
      description: require("../../assets/images/email.svg").default,
    },
    {
      alt: "whatsapp icon",
      description: require("../../assets/images/whatsapp.svg").default,
      href: ""
    },
  ];

  const links = [
    { name: "Sobre Mim", href: "#AboutMe" },
    { name: "Projetos", href: "#Projects" },
    { name: "Contato", href: "#ContactMe" },
  ];

  return (
    <footer>
      <div className={styles.logo}>
        <img src={logo} alt="logo" width={80} />
      </div>
      <nav className={styles.navSocials}>
        {socialsIcons.map((item, id) => (
          <div key={id} className={styles.icon}>
            <a href={item.href}><img src={item.description} width={35} alt={item.alt} /></a>
          </div>
        ))}
      </nav>
      <nav className={styles.navLinks}>
        {links.map((item, id) => (
          <a key={id} href={item.href}>
            {item.name}
          </a>
        ))}
      </nav>
      <div className={styles.dev}>
        Desenvolvido por lucasgsantos1727@gmail.com <br /> 2024 © Todos os
        direitos reservados.
      </div>
    </footer>
  );
};
