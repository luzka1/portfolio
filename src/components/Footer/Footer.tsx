import styles from "./styles.module.css";
import logo from "../../assets/images/logo.svg";
import useTextsContext from "../../data/hooks/useTextsContext";
import { useNavigate } from "react-router-dom";
import useAppConfigContext from "../../data/hooks/useAppConfigContext";

export const Footer = () => {
  const { data } = useTextsContext();
  const navigate = useNavigate();
  const { dataConfig } = useAppConfigContext();

  const handleScrollToSection = (section: string) => {
    navigate("/");

    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

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
      href: `https://wa.me/${dataConfig?.whatsapp_number}?text=${dataConfig?.whatsapp_text}`,
    },
  ];

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
        {data.footer.texts.map((item, id) => (
            <button
              key={id}
              onClick={() => handleScrollToSection(item.linkTo)}
              type="button"
            >
              {item.name}
            </button>
          ))}
      </nav>
      <div className={styles.dev}>
        {data.footer.rights}
      </div>
    </footer>
  );
};
