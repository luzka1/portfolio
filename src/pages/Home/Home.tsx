import { useEffect } from "react";
import { AboutMe, Banner, ContactMe, Footer, Habilities, Header, Projects } from "../../components";
import { scrollToTop } from "../../themes";


export const Home = () => {
  useEffect(()=>{
    scrollToTop();
  },[])
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "160px" }}>
      <Header />
      <Banner />
      <div className="section-container">
        <AboutMe />
      </div>
      <Projects />
      <div className="section-container">
        <Habilities />
      </div>
      <ContactMe />
      <Footer />
    </div>
  );
};
