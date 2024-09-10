import React from 'react'
import { useTheme } from './Contexts/ThemeContext'

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    const handleToggle = () => {
        const newTheme = theme === "lightMode" ? "darkMode" : "lightMode";
        toggleTheme(newTheme);
    };
    
    return (
        <button onClick={handleToggle}>
          Alternar para {theme === "lightMode" ? "Tema Escuro" : "Tema Claro"}
        </button>
    );
};
    

export default ThemeSwitcher;