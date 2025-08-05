import { createContext } from "react";

export const AddContext = createContext();

const value = {};

export const AppContextProvider = (props) => {
  return (
    <AddContext.Provider value={value}>{props.children}</AddContext.Provider>
  );
};
