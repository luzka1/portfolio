import { createContext, useState } from "react";
import { IData, ITextsContext } from "../interfaces/App.interface";
import { dataPtBr } from "./langs";

const TextsContext = createContext<ITextsContext>({} as ITextsContext);

export function TextsContextProvider(props: any) {

  const [data, setData] = useState<IData>(dataPtBr);

  return (
    <TextsContext.Provider
      value={{
        data,
        setData
      }}
    >
      {props.children}
    </TextsContext.Provider>
  );
}

export default TextsContext;
