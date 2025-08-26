import { createContext, useContext } from "react";
import type { Template } from "../../types";

type AppContextType = {
  templates: Template[];
};

const defaultValue: AppContextType = {
  templates: [],
};

export const AppContext = createContext<AppContextType>(defaultValue);

export const useAppContext = () => useContext(AppContext);
