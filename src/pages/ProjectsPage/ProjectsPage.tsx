import { useEffect } from "react";
import { Footer, Header, Project, Projects } from "../../components";
import { scrollToTop } from "../../themes";
import styles from "./styles.module.css";
import useAppContext from "../../data/hooks/useAppContext";
import useTextsContext from "../../data/hooks/useTextsContext";

export const ProjectsPage = () => {
  const { dataProject } = useAppContext();
  const {data} = useTextsContext();

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
      <div>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>{data.projectsPage.title}</h1>
          <p>
            {data.projectsPage.subtitle}
          </p>
        </div>
        <div className={styles.projects}>
          {dataProject.map((item, id) => (
            <Project key={id} id={id} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
