import { createContext, useState } from "react";

const ThemeContext = createContext({ theme: "", handleTheme: () => {} });

function ContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext , ContextProvider };
