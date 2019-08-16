import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [theme, setTheme] = useState({
    darkMode: true
  });

  const toggleTheme = () => {
    setTheme({ darkMode: !theme.darkMode});
  }

  return (
    <ThemeContext.Provider value={{...theme, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;

