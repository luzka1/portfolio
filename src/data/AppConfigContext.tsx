import { createContext, useEffect, useState } from "react";
import Parse from "parse";
import { IAppConfig, IAppConfigContext } from "../interfaces/App.interface";

const AppConfigContext = createContext<IAppConfigContext>({} as IAppConfigContext);

export function AppConfigProvider(props: any) {
  const [dataConfig, setDataConfig] = useState<IAppConfig>();

  const fetchAppConfig = async () => {
    try {
      const result : IAppConfig = await Parse.Cloud.run("getConfig");
      setDataConfig(result)
    } catch (error) {
      console.error("Erro ao buscar a configuracao do app:", error);
    }
  };
  
  useEffect(() => {
    fetchAppConfig();
  }, []);

  return (
    <AppConfigContext.Provider
      value={{
        dataConfig,
      }}
    >
      {props.children}
    </AppConfigContext.Provider>
  );
}

export default AppConfigContext;
