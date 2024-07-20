import React from "react";
import styles from "./styles.module.css";

export const AboutMe = () => {
  const text = "Lorem ipsum dolor sit met, consectetur adipiscing elit. Maecenas tincidunt iaculis lectus vel consectetur. Morbi ac ultrices orci, id blandit enim. Etiam porttitor commodo eros, sed rhoncus enim eleifend quis. Aenean eu nisi sit amet ligula porttitor imperdiet et ac nibh. In imperdiet, nunc et bibendum egestas, mauris ante vestibulum purus, et luctus nisl arcu quis purus. Nullam vehicula hendrerit feugiat. Integer efficitur sagittis luctus. Vivamus viverra eget orci quis tristique. In hac habitasse platea dictumst. Ut eleifend dui in volutpat condimentum";

  const itemsExp = [
    { id: 1, description: "Anos de experiência" },
    { id: 5, description: "Cursos completos" },
    { id: 5, description: "Projetos" },
  ];

  const itemsIcons = [
    {
      alt: "next icon",
      description: require("../../assets/images/next.svg").default,
    },
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

  return (
    <div className={styles.abContainer}>
      <div className={styles.title}>
        <h1>Sobre mim</h1>
      </div>
      <div className={styles.innerAbContainer}>
        <div className={styles.left}>
          <div>
            <h2>
              Olá, me chamo <br />
              Lucas Gabriel dos Santos
            </h2>
          </div>
          <div>
            <p>
             {text}
            </p>
          </div>
          <div>
            {itemsExp.map((item, id) => (
              <div className={`outlinedButton ${styles.btn}`} key={id}>
                <span>+{item.id}</span>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          {itemsIcons.map((item, id) => (
            <div key={id}>
              <img src={item.description} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
