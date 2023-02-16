import { useState } from "react";
import Context from "../contextAPI/Context.js";

const Provider = (props) => {
  
  const [theme, setTheme] = useState("light");
  
  return (
    <Context.Provider value={{
      theme: theme,
      toggleTheme: () => { setTheme(theme === "light" ? "dark" : "light")}
      }}>
      {props.children}
    </Context.Provider>
  );
}

export default Provider;