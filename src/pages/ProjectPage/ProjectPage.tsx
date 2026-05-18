import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header, Footer, Button, Skeleton } from "../../components";
import { scrollToTop } from "../../themes";
import styles from "./styles.module.css";
import { useWindowSize } from "../../data";
import useTextsContext from "../../data/hooks/useTextsContext";
import useProjectsContext from "../../data/hooks/useProjectsContext";
import { Error } from "../Error";

const itemsIcons = [
  {
    name: "JavaScript",
    alt: "javascript icon",
    description: require("../../assets/images/js.svg").default,
  },
  {
    name: "ReactJS",
    alt: "react icon",
    description: require("../../assets/images/react.svg").default,
  },
  {
    name: "Figma",
    alt: "figma icon",
    description: require("../../assets/images/figma.svg").default,
  },
  {
    name: "NextJS",
    alt: "next icon",
    description: require("../../assets/images/next.svg").default,
  },
  {
    name: "Typescript",
    alt: "typescript icon",
    description: require("../../assets/images/typescript.svg").default,
  },
  {
    name: "Tailwind",
    alt: "tailwind icon",
    description: require("../../assets/images/tailwind.svg").default,
  },
  {
    name: "ShadCn",
    alt: "shadcn icon",
    description: require("../../assets/images/shadcn.svg").default,
  },
  {
    name: "Vite",
    alt: "vite icon",
    description: require("../../assets/images/vite.svg").default,
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

  // Filtra os ícones com base nas tecnologias do projeto
  const filteredIcons = itemsIcons.filter((item) =>
    proj?.techs?.includes(item.alt.split(" ")[0]),
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
      {proj.img ? (
        <div className={styles.banner}>
          <img
            src={proj?.img._url}
            className={styles.projectImage}
            alt={`foto do projeto ${proj?.name}`}
          />
          <div className={styles.links}>
            {proj?.git_link ? (
              <a target="_blank" href={proj?.git_link} rel="noreferrer">
                <Button text="Github" type="button" />
              </a>
            ) : null}
            {proj?.proj_link ? (
              <a target="_blank" href={proj?.proj_link} rel="noreferrer">
                <Button variant="outlined" text="Projeto" type="button" />
              </a>
            ) : null}
          </div>
        </div>
      ) : (
        <Skeleton />
      )}

      <section className={styles.sectionProject}>
        <div className={styles.title}>
          <h2>{proj?.name}</h2>
          <p>
            {data.lang === "pt-br"
              ? proj?.tiny_description
              : proj?.tiny_desc_en}
          </p>
        </div>
        <div className={styles.description}>
          <div className={styles.title}>
            <h3>{data.projectPage.title}</h3>
          </div>
          <div className={styles.details}>
            <p>
              {data.lang === "pt-br"
                ? proj?.full_description
                : proj?.full_desc_en}
            </p>
          </div>
        </div>
        <div className={styles.tecs}>
          <div className={styles.title}>
            <h3>{data.projectPage.subtitle}</h3>
          </div>

          <div className={styles.icons}>
            {filteredIcons.map((icon, id) => (
              <div className={styles.techIcon} key={id}>
                <img src={icon.description} height={50} alt={icon.alt} />
                <span>{icon.name}</span>
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
