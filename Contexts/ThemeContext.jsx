import React, { createContext, useState, useContext, useEffect } from "react";

const lightMode = {
    background: "#FAFAFA",
    textColor: "#555555"
  };
  
  const darkMode = {
    background: "#404040",
    textColor: "#fafafa"
  };
  

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [ theme, setTheme ] = useState("lightMode");

    const toggleTheme = () => {
        setTheme(theme === "lightMode" ? "darkMode" : "lightMode");
    };

    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);


export default ThemeContext;