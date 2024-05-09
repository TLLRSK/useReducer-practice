import { createContext, useContext } from "react";

// Create Context
const AppContext = createContext();

// Create and export Provider
export const AppProvider = ({children}) => {
    return (
        <AppContext.Provider value={"hola"}>
            {children}
        </AppContext.Provider>
    )
}

//
export const useAppContext = () => useContext(AppContext);