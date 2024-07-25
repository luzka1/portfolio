import styles from "./styles.module.css";
import { Button, Project } from "..";

export const Projects = () => {
  const ButtonClick = () => {
    return true;
  };

  var buttonValid : boolean = false;

  const dataProject = [
    {
      img: require('../../assets/images/img-proj.svg'),
      name: 'Proj Sony',
      tiny_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt iaculis lectus vel consectetur. Morbi ac ultrices orci, id blandit enim.  ',
      full_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt iaculis lectus vel consectetur. Morbi ac ultrices orci, id blandit enim.  '
    },
    {
      img: require('../../assets/images/img-proj.svg'),
      name: 'Proj Sony',
      tiny_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt iaculis lectus vel consectetur. Morbi ac ultrices orci, id blandit enim.  ',
      full_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt iaculis lectus vel consectetur. Morbi ac ultrices orci, id blandit enim.  '
    },
    {
      img: require('../../assets/images/img-proj.svg'),
      name: 'Proj Sony',
      tiny_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt iaculis lectus vel consectetur. Morbi ac ultrices orci, id blandit enim.  ',
      full_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt iaculis lectus vel consectetur. Morbi ac ultrices orci, id blandit enim.  '
    },
  ]

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
        {!buttonValid ? <Button text="Ver todos" type="button" onClick={ButtonClick} /> : null}
      </div>
      <div className={styles.projects}>
        {dataProject.map((item, id) => (
          <Project key={id} id={id} item={item} />
        ))}
      </div>
    </section>
  );
};
