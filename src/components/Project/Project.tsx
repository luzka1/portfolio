import styles from "../Projects/styles.module.css";
import doubleArrow from "../../assets/images/double-arrow.svg";
import img from "../../assets/images/img-proj.svg";

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
  const handleClick = () =>{
    
    return true
  }

  return (
    <div
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
    </div>
  );
};
