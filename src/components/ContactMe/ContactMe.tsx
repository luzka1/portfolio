import { useState } from "react";
import styles from "./styles.module.css";
import { Button } from "..";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { modalAnimation } from "../../themes";
import useTextsContext from "../../data/hooks/useTextsContext";

export const ContactMe = () => {
  const { data } = useTextsContext();
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const templateParams = {
      from_email: email,
      subject,
      message,
    };

    emailjs
      .send(
        "service_l0hfrfn",
        "template_3gbvmba",
        templateParams,
        "vdolnk6PZIIswd1Jv"
      )
      .then((response) => {
        console.log(
          "Email enviado com sucesso!",
          response.status,
          response.text
        );
        alert("Email enviado com sucesso!");
      })
      .catch((err) => {
        console.error("Falha ao enviar o email:", err);
        alert("Falha ao enviar o email.");
      });
  };

  return (
    <section className={styles.cContainer} id='contact-me'>
      <motion.div className={styles.form}
      variants={modalAnimation}
      initial="hidden"
      whileInView="visible">
        <h3>{data.section4.title}</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              id="email"
              placeholder={data.section4.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="subject"
              placeholder={data.section4.subject}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <textarea
              id="message"
              placeholder={data.section4.message}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <Button type="submit" text={data.section4.button}/>
        </form>
      </motion.div>
    </section>
  );
};
