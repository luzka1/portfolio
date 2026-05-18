import styles from "./styles.module.css";
import logo from "../../assets/images/logo.svg";
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

  const handleScrollToSection = (section: string) => {
    navigate("/");

    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header ref={headerRef}>
      <div className={styles.innerHeader}>
        <img src={logo} alt="logo" onClick={toHomePage} />
        <button className={styles.btnHeader} onClick={showHeader}>
          &#9776;
        </button>
        <div>
          <button
            onClick={() => handleScrollToSection("about-me")}
            type="button"
          >
            Sobre mim
          </button>
          <button
            onClick={() => handleScrollToSection("projects")}
            type="button"
          >
            Projetos
          </button>
          <button
            onClick={() => handleScrollToSection("contact-me")}
            type="button"
          >
            Contato
          </button>

          <button className={styles.btnHeaderClose} onClick={showHeader}>
            <img src={close} alt="close button" />
          </button>
        </div>
      </div>
    </header>
  );
};
