import { useEffect } from "react";
import { Footer, Header, Project, Projects } from "../../components";
import { scrollToTop } from "../../themes";
import styles from "./styles.module.css";
import useAppContext from "../../data/hooks/useAppContext";

export const ProjectsPage = () => {
  const { dataProject } = useAppContext();

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
          <h1>Todos os projetos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            provident nihil natus quasi cupiditate a, nisi sequi illum delectus
            rem, ipsa nemo quos tenetur similique ex quod alias architecto
            dicta!
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
