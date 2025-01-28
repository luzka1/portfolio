import { useEffect } from "react";
import { Footer, Header, Project } from "../../components";
import { scrollToTop } from "../../themes";
import styles from "./styles.module.css";
import useTextsContext from "../../data/hooks/useTextsContext";
import useProjectsContext from "../../data/hooks/useProjectsContext";
import { motion } from "framer-motion";

export const ProjectsPage = () => {
  const { projects } = useProjectsContext();
  const { data } = useTextsContext();

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
        {projects.length > 0 ? (
          projects
            .map((item, id) => <Project key={item.id} id={id} item={item} />)
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.5,
              ease: [0, 0.71, 0.2, 1.01],
              delay: 0,
            }}
            className={styles.skeleton}
          >
            <div className={styles.cardDescription}></div>
          </motion.div>
        )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
