import { Header, Banner, AboutMe } from "../../components";

export const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "160px" }}>
      <Header />
      <Banner />
      <div className="section-container">
        <AboutMe />
      </div>
    </div>
  );
};
