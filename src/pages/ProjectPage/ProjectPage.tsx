import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header, Footer, Button, OutlinedButton } from "../../components";
import { scrollToTop } from "../../themes";
import styles from "./styles.module.css";
import { useWindowSize } from "../../data";
import useTextsContext from "../../data/hooks/useTextsContext";
import useProjectsContext from "../../data/hooks/useProjectsContext";
import { Error } from "../Error";

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
  {
    alt: "next icon",
    description: require("../../assets/images/next.svg").default,
  },
];

export const ProjectPage = () => {
  const { id } = useParams();
  const { projects } = useProjectsContext();
  const proj = projects.find((idProj) => idProj.id === id);
  const { width } = useWindowSize();
  const { data } = useTextsContext();

  // Redirecione a tela do usuário para o topo sempre que resetar a página
  useEffect(() => {
    scrollToTop();
  }, []);

  // Mostrar os botões na tela
  const handleClickButton = (link: string) => {
    if (link === "Github") {
      window.open(`${proj?.git_link}`, "_blank");
    }
    window.open(`${proj?.proj_link}`, "_blank");
  };

  // Filtra os ícones com base nas tecnologias do projeto
  const filteredIcons = itemsIcons.filter((item) =>
    proj?.techs?.includes(item.alt.split(" ")[0])
  );

  return proj ? (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      {width > 1024 ? (
        <Header />
      ) : (
        <div>
          <Header />
        </div>
      )}
      <img src={proj?.img._url} alt={`foto do projeto ${proj?.name}`} />
      <section className={styles.sectionProject}>
        <div className={styles.title}>
          <h2>{proj?.name}</h2>
          <p>{proj?.tiny_description}</p>
        </div>
        <div className={styles.description}>
          <div className={styles.title}>
            <h3>{data.projectPage.title}</h3>
          </div>
          <div className={styles.details}>
            <p>{proj?.full_description}</p>
            <div className={styles.links}>
              {proj?.git_link ? (
                <Button
                  text="Github"
                  type="button"
                  onClick={() => handleClickButton("Github")}
                />
              ) : null}
              {proj?.proj_link ? (
                <OutlinedButton
                  text="Projeto"
                  type="button"
                  onClick={() => handleClickButton("Projeto")}
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className={styles.tecs}>
          <div className={styles.title}>
            <h3>{data.projectPage.subtitle}</h3>
          </div>
          <div className={styles.icons}>
            {filteredIcons.map((item, id) => (
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
  ) : (
    <Error />
  );
};
