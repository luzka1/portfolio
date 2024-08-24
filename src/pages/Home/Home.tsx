import { useEffect } from "react";
import { AboutMe, Banner, ContactMe, Footer, Header, Projects, Skills } from "../../components";
import { scrollToTop } from "../../themes";

export const Home = () => {
  useEffect(()=>{
    scrollToTop();
  },[])
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
      <Header />
      <Banner />
      <div className="section-container">
        <AboutMe />
      </div>
      <Projects />
      <div className="section-container">
        <Skills />
      </div>
      <ContactMe />
      <Footer />
    </div>
  );
};
