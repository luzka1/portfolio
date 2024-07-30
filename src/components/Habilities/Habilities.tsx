import styles from "./styles.module.css";
import { Button } from "..";
import { motion } from "framer-motion";

export const Habilities = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt iaculis lectus vel consectetur. Morbi ac ultrices orci, id blandit enim. Etiam porttitor commodo eros, sed rhoncus enim eleifend quis. Aenean eu nisi sit amet ligula porttitor imperdiet et ac nibh. In imperdiet, nunc et bibendum egestas, mauris ante vestibulum purus, et luctus nisl arcu quis purus. Nullam vehicula hendrerit feugiat. Integer efficitur sagittis luctus. Vivamus viverra eget orci quis tristique. In hac habitasse platea dictumst. Ut eleifend dui in volutpat condimentum";

  const itemsIcons = [
    {
      name: "NextJs",
      alt: "next icon",
      description: require("../../assets/images/next.svg").default,
      color: "#000000",
      percent: "80%",
    },
    {
      name: "JavaScript",
      alt: "javascript icon",
      description: require("../../assets/images/js.svg").default,
      color: "#F7DF1E",
      percent: "80%",
    },
    {
      name: "React",
      alt: "react icon",
      description: require("../../assets/images/react.svg").default,
      color: "#00D8FF",
      percent: "80%",
    },
    {
      name: "Figma",
      alt: "figma icon",
      description: require("../../assets/images/figma.svg").default,
      color: "#FF7262",
      percent: "80%",
    },
  ];

  const handleClick = () => {
    window.open(
      "https://www.linkedin.com/in/lucas-santos-341856247/",
      "_blank"
    );
  };

  return (
    <section className={styles.hContainer}>
      <div className={styles.title}>
        <h1>Habilidades</h1>
      </div>
      <motion.div
        className={styles.innerHContainer}
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
          delay: 0,
        }}
      >
        <div>
          <p>{text}</p>
          <Button text="Linkedin" type="button" onClick={handleClick} />
        </div>
        <div className={styles.allIcons}>
          {itemsIcons.map((item, id) => (
            <div key={id} className={styles.iconItem}>
              <img src={item.description} alt={item.alt} />
              <div>
                <div>
                  <p>{item.name}</p>
                  <p>{item.percent}</p>
                </div>
                <div className={styles.progressBar}>
                  <div
                    style={{ width: item.percent, backgroundColor: item.color }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
