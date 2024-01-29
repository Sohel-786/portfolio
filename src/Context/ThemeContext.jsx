import { createContext, useState } from "react";

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
};

export { ThemeContext, ContextProvider };
