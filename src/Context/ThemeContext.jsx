import { createContext, useState } from "react";
import PropTypes from 'prop-types';

const ThemeContext = createContext({ theme: "", handleTheme: () => {} });

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ContextProvider.propTypes = {
  children : PropTypes.node.isRequired
};

export { ThemeContext , ContextProvider };
