import styles from "./styles.module.css";
import { Button, Project } from "..";
import useTextsContext from "../../data/hooks/useTextsContext";
import useProjectsContext from "../../data/hooks/useProjectsContext";
import { motion } from "framer-motion";

export const Projects = () => {
  const { data } = useTextsContext();
  const { projects } = useProjectsContext();

  var buttonValid: boolean = false;

  return (
    <section className={styles.pContainer} id="projects">
      <div className={styles.title}>
        <div>
          <h1>{data.section2.title}</h1>
          <span>
            <p>{data.section2.subtitle}</p>
          </span>
        </div>
        {!buttonValid ? (
          <a href="/projects">
            <Button text={data.section2.button} type="button" />
          </a>
        ) : null}
      </div>
      <div className={styles.projects}>
        {projects.length > 0 ? (
          projects
            .slice(0, 3)
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
    </section>
  );
};
