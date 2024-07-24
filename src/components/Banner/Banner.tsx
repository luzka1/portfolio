import styles from "./styles.module.css";
import { Button, OutlinedButton } from "..";
import logo from "../../assets/images/logo.svg";
import arrow from "../../assets/images/arrow.svg";
import { motion } from "framer-motion";
import { anim, itemHeader } from "../../themes/animation";

export const Banner = () => {
  
  const transition = {
    duration: 1.5,
    ease: [0, 0.71, 0.2, 1.01],
    delay: 1,
    damping: 10,
    stiffness: 100,
  };

  return (
    <section className={styles.container}>
      <motion.div
        variants={itemHeader}
        initial="hidden"
        animate="visible"
        transition={transition}
        className={styles.indicationDown}
      >
        <p>Role para baixo</p>
        <motion.img
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src={arrow}
          alt="seta para baixo"
        />
      </motion.div>

      <div className={styles.innerContainer}>
        <motion.div
          variants={anim}
          initial="hidden"
          animate="visible"
          transition={transition}
        >
          <motion.div
            variants={anim}
            initial="hidden"
            animate="visible"
            transition={transition}
          >
            Lucas Gabriel
          </motion.div>
          <motion.div
            variants={anim}
            initial="hidden"
            animate="visible"
            transition={transition}
          >
            <p style={{ color: "var(--pink)" }}>Desenvolvedor Web</p>
            <p style={{ color: "var(--purple)" }}>Front-End</p>
          </motion.div>
          <div className={styles.buttons}>
            <Button text="Contate-me" type="reset" />
            <OutlinedButton text="Projetos" type="button" />
          </div>
        </motion.div>
        <div className={styles.photo}>
          <div>
            <motion.img
              initial={{ y: -550, opacity: 0 }}
              animate={{ y: 0, rotateY: 360, opacity: 1 }}
              transition={{
                opacity: { delay: 2 },
                y: { type: "spring", stiffness: 200, damping: 15, delay: 2 },
                rotateY: { repeat: Infinity, duration: 2, ease: "linear" },
              }}
              src={logo}
              alt="logo com um fundo com a foto do lucas"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
