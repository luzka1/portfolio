import { createContext } from "react";
import { IAppContext } from "../interfaces/App.interface";

const AppContext = createContext<IAppContext>({} as IAppContext);

export function AppProvider(props: any) {

  const dataProject = [
    {
      img: require("../assets/images/img-proj.svg"),
      name: "Proj Sony",
      tiny_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt iaculis lectus vel consectetur. Morbi ac ultrices orci, id blandit enim.  ",
      full_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt iaculis lectus vel consectetur. Morbi ac ultrices orci, id blandit enim.  ",
    },
    {
      img: require("../assets/images/img-proj.svg"),
      name: "Proj Sony",
      tiny_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt iaculis lectus vel consectetur. Morbi ac ultrices orci, id blandit enim.  ",
      full_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt iaculis lectus vel consectetur. Morbi ac ultrices orci, id blandit enim.  ",
    },
    {
      img: require("../assets/images/img-proj.svg"),
      name: "Proj Sony",
      tiny_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt iaculis lectus vel consectetur. Morbi ac ultrices orci, id blandit enim.  ",
      full_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt iaculis lectus vel consectetur. Morbi ac ultrices orci, id blandit enim.  ",
    },
    {
      img: require("../assets/images/img-proj.svg"),
      name: "Proj Sony",
      tiny_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt iaculis lectus vel consectetur. Morbi ac ultrices orci, id blandit enim.  ",
      full_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt iaculis lectus vel consectetur. Morbi ac ultrices orci, id blandit enim.  ",
    },
    {
      img: require("../assets/images/img-proj.svg"),
      name: "Proj Sony",
      tiny_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt iaculis lectus vel consectetur. Morbi ac ultrices orci, id blandit enim.  ",
      full_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt iaculis lectus vel consectetur. Morbi ac ultrices orci, id blandit enim.  ",
    },
  ];
  
  return (
    <AppContext.Provider
      value={{
        dataProject
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
