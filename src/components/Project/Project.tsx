import styles from "../Projects/styles.module.css";
import doubleArrow from "../../assets/images/double-arrow.svg";
import img from "../../assets/images/img-proj.svg";
import { motion } from "framer-motion";
import { useWindowSize } from "../../data";
import { useNavigate } from "react-router-dom";
import useTextsContext from "../../data/hooks/useTextsContext";
import { ProjectProps } from "../../interfaces/Project.interface";

interface ProjectPropss{
  id: number;
  item: ProjectProps;
}

export const Project = ({ id, item }: ProjectPropss) => {
  const navigate = useNavigate();
  const { data } = useTextsContext();

  const handleClick = () => {
    navigate(`/project/${item.id}`);
  };

  const { width } = useWindowSize();

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
      <img
        src={img}
        width={width < 1024 ? "100%" : "50%"}
        alt="foto do projeto sony"
      />
      <div>
        <span>{item.name}</span>
                  <p>
            {data.lang === "pt-br"
              ? item?.tiny_description
              : item?.tiny_desc_en}
          </p>
        <button onClick={handleClick}>
          {data.section2.buttons} <img src={doubleArrow} alt="" />
        </button>
      </div>
    </motion.div>
  );
};
