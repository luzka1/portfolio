import styles from "./styles.module.css";
import logo from "../../assets/images/logo.svg";
import close from "../../assets/images/close.svg";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import brasil from "../../assets/images/brasil.svg";
import eu from "../../assets/images/united-states.svg";
import useTextsContext from "../../data/hooks/useTextsContext";

const languages = [
  {
    lang: "PT-BR",
    photo: brasil,
  },
  {
    lang: "EN-US",
    photo: eu,
  },
];

export const Header = () => {
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const { data, setData } = useTextsContext();

  const initialLanguage = localStorage.getItem("language") || "PT-BR";
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find(lang => lang.lang === initialLanguage) || languages[0]
  );

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

  const handleLanguageSelect = (language: (typeof languages)[number]) => {
    setSelectedLanguage(language);
    setMenuIsOpen(false);

    setData(language.lang);
  };

  return (
    <header ref={headerRef}>
      <div className={styles.innerHeader}>
        <img src={logo} alt="logo" onClick={toHomePage} />
        <button className={styles.btnHeader} onClick={showHeader}>
          &#9776;
        </button>
        <div>
          {data.header.texts.map((item, id) => (
            <button
              key={id}
              onClick={() => handleScrollToSection(item.linkTo)}
              type="button"
            >
              {item.name}
            </button>
          ))}
          <div className={styles.menuLanguage}>
            <div className={styles.innerMenuLanguage}>
              <div onClick={() => setMenuIsOpen(!menuIsOpen)}>
                <img src={selectedLanguage.photo} alt={selectedLanguage.lang} />
                <span>{selectedLanguage.lang}</span>
              </div>
              {menuIsOpen && (
                <>
                  {languages
                    .filter(
                      (language) => language.lang !== selectedLanguage.lang
                    )
                    .map((language, index) => (
                      <div
                        key={index}
                        onClick={() => handleLanguageSelect(language)}
                      >
                        <img src={language.photo} alt={language.lang} />
                        <span>{language.lang}</span>
                      </div>
                    ))}
                </>
              )}
            </div>
          </div>
          <button className={styles.btnHeaderClose} onClick={showHeader}>
            <img src={close} alt="close button" />
          </button>
        </div>
      </div>
    </header>
  );
};
