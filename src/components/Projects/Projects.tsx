import styles from "./styles.module.css";
import { Button, Project } from "..";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../data/hooks/useAppContext";
import useTextsContext from "../../data/hooks/useTextsContext";

export const Projects = () => {
  const { data } = useTextsContext();
  const navigate = useNavigate();
  const { dataProject } = useAppContext();
  const ButtonClick = () => {
    navigate("/projects");
  };

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
          <Button
            text={data.section2.button}
            type="button"
            onClick={ButtonClick}
          />
        ) : null}
      </div>
      <div className={styles.projects}>
        {dataProject.slice(0, 3).map((item, id) => (
          <Project key={id} id={id} item={item} />
        ))}
      </div>
    </section>
  );
};
