import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAppContext from "../../data/hooks/useAppContext";
import img from "../../assets/images/img-proj.svg";
import { Header, Footer, Button, OutlinedButton } from "../../components";
import { scrollToTop } from "../../themes";
import styles from "./styles.module.css";
import { useWindowSize } from "../../data";

const itemsIcons = [
  {
    alt: "javascript icon",
    description: require("../../assets/images/js.svg").default,
  },
  {
    alt: "react icon",
    description: require("../../assets/images/react.svg").default,
  },
  {
    alt: "figma icon",
    description: require("../../assets/images/figma.svg").default,
  },
];

export const ProjectPage = () => {
  const { id } = useParams();
  const { dataProject } = useAppContext();
  const proj = dataProject.find((idProj) => idProj.name === id);
  const { width } = useWindowSize();

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      {width > 1024 ? (
        <Header />
      ) : (
        <div>
          <Header />
        </div>
      )}
      <img src={img} alt={`foto do projeto ${proj?.name}`} />
      <section className={styles.sectionProject}>
        <div className={styles.title}>
          <h2>{proj?.name}</h2>
          <p>{proj?.tiny_description}</p>
        </div>
        <div className={styles.description}>
          <div className={styles.title}>
            <h3>DESCRIÇÃO</h3>
          </div>
          <div className={styles.details}>
            <p>{proj?.full_description}</p>
            <div className={styles.links}>
              {proj?.git_link ? <Button text="Github" type="button" /> : null}
              {proj?.proj_link ? (
                <OutlinedButton text="Projeto" type="button" />
              ) : null}
            </div>
          </div>
        </div>
        <div className={styles.tecs}>
          <div className={styles.title}>
            <h3>TECNOLOGIAS UTILIZADAS</h3>
          </div>
          <div className={styles.icons}>
            {itemsIcons.map((item, id) => (
              <div key={id}>
                <img
                  src={item.description}
                  width={50}
                  height={50}
                  alt={item.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
