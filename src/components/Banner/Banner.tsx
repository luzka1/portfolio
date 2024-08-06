import styles from "./styles.module.css";
import { Button, ContactModal, OutlinedButton } from "..";
import logo from "../../assets/images/logo.svg";
import arrow from "../../assets/images/arrow.svg";
import { motion } from "framer-motion";
import { anim, itemHeader } from "../../themes/animation";
import { useState } from "react";
import useTextsContext from "../../data/hooks/useTextsContext";

export const Banner = () => {
  const [openModal, setOpen] = useState<boolean>(false);
  const { data } = useTextsContext();

  const handleClick = () => {
    setOpen(!openModal);
  };

  const transition = {
    duration: 1.5,
    ease: [0, 0.71, 0.2, 1.01],
    delay: 1,
    damping: 10,
    stiffness: 100,
  };

  return (
    <section className={styles.container}>
      <ContactModal isOpen={openModal} setOpen={handleClick} />
      <motion.div
        variants={itemHeader}
        initial="hidden"
        animate="visible"
        transition={transition}
        className={styles.indicationDown}
      >
        <p>{data.banner.scroll}</p>
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
            {data.banner.subtitle.map((item, id) => (
              <p
                key={id}
                style={
                  id === 0
                    ? { color: "var(--pink)" }
                    : { color: "var(--purple)" }
                }
              >
                {item}
              </p>
            ))}
          </motion.div>
          <div className={styles.buttons}>
            {data.banner.buttons.map((item, id) =>
              id === 0 ? (
                <Button key={id} text={item} type="reset" onClick={handleClick} />
              ) : (
                <a href="#projects">
                  <OutlinedButton key={id} text={item} type="button" />
                </a>
              )
            )}
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
