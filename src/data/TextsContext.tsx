import { createContext, useState } from "react";
import { IData, ITextsContext } from "../interfaces/App.interface";
import { dataPtBr, dataEn } from "./langs";

const TextsContext = createContext<ITextsContext>({} as ITextsContext);

export function TextsContextProvider(props: any) {
  const getInitialData = (): IData => {
    const storedLanguage = localStorage.getItem("language");

    switch (storedLanguage) {
      case "EN-US":
        return dataEn;
      case "PT-BR":
      default:
        return dataPtBr;
    }
  };

  const [data, setData] = useState<IData>(getInitialData);

  const updateLanguage = (language: string) => {
    localStorage.setItem("language", language);
    switch (language) {
      case "EN-US":
        setData(dataEn);
        break;
      case "PT-BR":
      default:
        setData(dataPtBr);
    }
  };

  return (
    <TextsContext.Provider value={{ data, setData: updateLanguage }}>
      {props.children}
    </TextsContext.Provider>
  );
}

export default TextsContext;
