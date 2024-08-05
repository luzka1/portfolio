import styles from "./styles.module.css";
import { Button, Project } from "..";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../data/hooks/useAppContext";

export const Projects = () => {
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
          <h1>Veja meus projetos</h1>
          <span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt iaculis lectus vel consectetur.
            </p>
          </span>
        </div>
        {!buttonValid ? (
          <Button text="Ver todos" type="button" onClick={ButtonClick} />
        ) : null}
      </div>
      <div className={styles.projects}>
        {dataProject.slice(0,3).map((item, id) => (
          <Project key={id} id={id} item={item} />
        ))}
      </div>
    </section>
  );
};
