import React, { createContext, useState, useContext } from "react";

// Definindo as cores para modo claro e escuro
const lightMode = {
    background: "#ffffff",
    textColor: "#000000"
  };
  
  const darkMode = {
    background: "#000000",
    textColor: "#ffffff"
  };
  

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [ theme, setTheme ] = useState("lightMode");

    const toggleTheme = (selectTheme) => {
        setTheme(selectTheme);
    };

    const currentTheme = theme === "lightMode" ? lightMode : darkMode;

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);


export default ThemeContext;