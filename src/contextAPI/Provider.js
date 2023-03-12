import { useState } from "react";
import Context from "../contextAPI/Context.js";

const Provider = (props) => {
  
  const [theme, setTheme] = useState("light");
  
  return (
    <Context.Provider value={{
      theme,
      toggleTheme: themeValue => { 
        setTheme(() => {
          switch (themeValue) {
            case "light" : return "dark";
            case "dark" : return "light";
            case "local-dark" : return "dark";
            default : console.log("Theme Value: ", themeValue);
          }
        })},
      }}>
      {props.children}
    </Context.Provider>
  );
}

export default Provider;