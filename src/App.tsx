import { GlobalStyles } from "./themes";
import { Rotas } from "./routes";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { TextsContextProvider } from "./data/TextsContext";
import Parse from "parse";
import { ProjectsProvider } from "./data/ProjectsContext";
import { AppConfigProvider } from "./data/AppConfigContext";

function App() {
  Parse.initialize(
    "iIuCpQSvejU7fZrVs14IUvkGYKNqbHxCJwI6MKMR",
    "UcF2RvOtVxLXjDeRz3Mrs6HvoDImh76ls3Qlwkvg"
  );
  Parse.serverURL = "https://parseapi.back4app.com/";

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <AppConfigProvider>
          <ProjectsProvider>
            <TextsContextProvider>
              <GlobalStyles />
              <Rotas />
            </TextsContextProvider>
          </ProjectsProvider>
        </AppConfigProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
