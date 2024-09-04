import styles from "./styles.module.css";
import close from "../../../assets/images/close.svg";
import copy from "../../../assets/images/copy.svg";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { modalAnimation } from "../../../themes";
import useTextsContext from "../../../data/hooks/useTextsContext";
import useAppConfigContext from "../../../data/hooks/useAppConfigContext";

interface IModalProps {
  isOpen: boolean;
  setOpen: () => void;
}

export const ContactModal = ({ isOpen, setOpen }: IModalProps) => {
  const { data } = useTextsContext();
  const { dataConfig } = useAppConfigContext();
  const email = dataConfig?.email || "lucasgsantos1727@gmail.com";

  if (!isOpen) {
    return null;
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copiado com sucesso!");
    } catch (err) {
      toast.error("Erro inesperado!");
    }
  };

  const socialsIcons = [
    {
      alt: "github icon",
      description: require("../../../assets/images/github.svg").default,
      href: "https://github.com/luzka1",
    },
    {
      alt: "linkedin icon",
      description: require("../../../assets/images/linkedin.svg").default,
      href: "https://www.linkedin.com/in/lucas-santos-341856247/",
    },
    {
      alt: "email icon",
      description: require("../../../assets/images/email.svg").default,
    },
    {
      alt: "whatsapp icon",
      description: require("../../../assets/images/whatsapp.svg").default,
      href: `https://wa.me/${dataConfig?.whatsapp_number}?text=${dataConfig?.whatsapp_text}`,
    },
  ];

  return (
    <div className="background-modal">
      <motion.div
        className={styles.modal}
        variants={modalAnimation}
        initial="hidden"
        animate="visible"
      >
        <div>
          <h3>{data.section4.text}</h3>
          <div onClick={setOpen}>
            <img src={close} alt="close button" style={{ cursor: "pointer" }} />
          </div>
        </div>
        <nav className={styles.navSocials}>
          {socialsIcons.map((item, id) => (
            <div key={id} className={styles.icon}>
              <a href={item.href} target="_blank" rel="noreferrer">
                <img src={item.description} width={40} alt={item.alt} />
              </a>
            </div>
          ))}
        </nav>
        <div className={styles.copyBoard}>
          <div>
            <input readOnly placeholder={email} value={email} type="email" />
            <img src={copy} alt="copy button" onClick={copyToClipboard} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
