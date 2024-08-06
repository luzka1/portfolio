import { GlobalStyles } from "./themes";
import { Rotas } from "./routes";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./data";
import "react-toastify/dist/ReactToastify.css";
import { TextsContextProvider } from "./data/TextsContext";

function App() {
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
        <AppProvider>
          <TextsContextProvider>
            <GlobalStyles />
            <Rotas />
          </TextsContextProvider>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
