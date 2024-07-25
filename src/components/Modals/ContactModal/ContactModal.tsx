import styles from "./styles.module.css";
import close from "../../../assets/images/close.svg";
import copy from "../../../assets/images/copy.svg";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { modalAnimation } from "../../../themes";

interface IModalProps {
  isOpen: boolean;
  setOpen: () => void;
}

export const ContactModal = ({ isOpen, setOpen }: IModalProps) => {
  if (!isOpen) {
    return null;
  }

  var email: string = "lucasgsantos1727@gmail.com";

  var whatsapp_number: number = 5511961499951;

  var whatsapp_text: string = "Olá%20preciso%20de%20um%20projeto!";

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
      href: `https://wa.me/${whatsapp_number}?text=${whatsapp_text}`,
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
          <h3>FALE COMIGO</h3>
          <div onClick={setOpen}>
            <img src={close} alt="close button" style={{ cursor: "pointer" }} />
          </div>
        </div>
        <nav className={styles.navSocials}>
          {socialsIcons.map((item, id) => (
            <div key={id} className={styles.icon}>
              <a href={item.href} target="_blank" rel="noreferrer">
                <img src={item.description} width={50} alt={item.alt} />
              </a>
            </div>
          ))}
        </nav>
        <div className={styles.copyBoard}>
          <p>Meu E-mail para contato</p>
          <div>
            <input readOnly placeholder={email} value={email} type="email" />
            <img src={copy} alt="copy button" onClick={copyToClipboard} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
