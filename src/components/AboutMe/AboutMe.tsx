import { motion } from "framer-motion";
import styles from "./styles.module.css";
import useTextsContext from "../../data/hooks/useTextsContext";

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

export const AboutMe = () => {
  const {data} = useTextsContext();

  return (
    <section className={styles.abContainer} id="about-me">
      <div className={styles.title}>
        <h1>{data.section1.title}</h1>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
          delay: 0,
        }}
        viewport={{ once: true }}
        className={styles.innerAbContainer}
      >
        <div className={styles.left}>
          <div>
            <h2>
              {data.section1.subtitle}
            </h2>
          </div>
          <div>
            <p>{data.section1.text}</p>
          </div>
          <div className={styles.itens}>
            {data.section1.itemsExp?.map((item, id) => (
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
              <img src={item.description} width={76} height={76} alt={item.alt} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
