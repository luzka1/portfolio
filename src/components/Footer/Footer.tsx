import styles from "./styles.module.css";
import logo from "../../assets/images/logo.svg";

var whatsapp_number:number = 5511961499951;

var whatsapp_text:string = 'Olá%20preciso%20de%20um%20projeto!';

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
    href: `https://wa.me/${whatsapp_number}?text=${whatsapp_text}`,
  },
];

const links = [
  { name: "Sobre Mim", href: "#about-me" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact-me" },
];

export const Footer = () => {


  return (
    <footer>
      <div className={styles.logo}>
        <img src={logo} alt="logo" width={65} />
      </div>
      <nav className={styles.navSocials}>
        {socialsIcons.map((item, id) => (
          <div key={id} className={styles.icon}>
            <a href={item.href}><img src={item.description} width={25} height={25} alt={item.alt} /></a>
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
