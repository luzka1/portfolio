import styles from "../Projects/styles.module.css";
import doubleArrow from "../../assets/images/double-arrow.svg";
import img from "../../assets/images/img-proj.svg";
import { motion } from "framer-motion";

interface ProjectProps {
  id: number;
  item: {
    img: any;
    name: string;
    tiny_description: string;
    full_description?: string;
  };
}

export const Project = ({ id, item }: ProjectProps) => {
  const handleClick = () => {
    return true;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.5,
        ease: [0, 0.71, 0.2, 1.01],
        delay: 0,
      }}
      className={styles.project}
      style={
        id % 2 === 0
          ? { flexDirection: "row" }
          : { flexDirection: "row-reverse" }
      }
    >
      <img src={img} alt="foto do projeto sony" />
      <div>
        <span>{item.name}</span>
        <p>{item.tiny_description}</p>
        <button onClick={handleClick}>
          Ver mais sobre <img src={doubleArrow} alt="" />
        </button>
      </div>
    </motion.div>
  );
};
