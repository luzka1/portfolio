import { motion } from "framer-motion";
import logo from "../../assets/images/logo.svg";
import styles from "./styles.module.css";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.error}>
      <motion.img
        initial={{ y: -350, opacity: 0 }}
        animate={{ y: 0, rotateY: 360, opacity: 1 }}
        transition={{
          y: { type: "spring", stiffness: 200, damping: 15, delay: 0 },
          rotateY: { repeat: Infinity, duration: 2, ease: "linear" },
        }}
        src={logo}
        alt="logo com um fundo com a foto do lucas"
      />
      <motion.h2
        initial={{ y: -350, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: { type: "spring", stiffness: 200, damping: 15, delay: 0 },
        }}
      >
        PÁGINA NÃO ENCONTRADA!
      </motion.h2>
      <Button text="Início" type="button" onClick={HandleClick} />
    </div>
  );
};
