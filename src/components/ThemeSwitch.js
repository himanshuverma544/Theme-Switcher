import { useEffect, useContext, useRef } from 'react';
import Context from '../contextAPI/Context';

import Image from "../components/Image";

import AppThemeObj from '../AppThemeObj';
import { memoGetImage } from '../functions';


const ThemeSwitch = () => {

  const {theme, toggleTheme} = useContext(Context);
  const currentTheme = AppThemeObj[theme];
  const manageTheme = useRef({
    localCurrentTheme : "",
    avoidOnce : true
  });
  
  useEffect(() => {
    loadLocalCurrentTheme();

    function loadLocalCurrentTheme() {
      manageTheme.current.localCurrentTheme = localStorage.getItem("localCurrentTheme");
      if (manageTheme.current.localCurrentTheme === "local-dark") {
        toggleTheme(manageTheme.current.localCurrentTheme);
      }
    }
  // eslint-disable-next-line
  }, []); 

  useEffect(() => {

    if (manageTheme.current.localCurrentTheme === "local-light" || !manageTheme.current.avoidOnce) {
      setLocalCurrentTheme();
      switchTheme();

      function setLocalCurrentTheme() {
          localStorage.setItem("localCurrentTheme", `local-${theme}`);
      }   

      function switchTheme() {
        document.querySelector("head link[rel='icon']").href = memoGetImage(currentTheme.img.name);
        document.body.style.backgroundColor = currentTheme.body.backgroundColor;
      }
    }

    if (manageTheme.current.avoidOnce) {
      manageTheme.current.avoidOnce = false; 
    }
  }, [theme, currentTheme]);

  return (
    <div className="content">
      <h1 style={{color: currentTheme.heading.textColor}}>
        {`${currentTheme.heading.textContent} Theme`}
      </h1>
      <Image name={currentTheme.img.name} alt={currentTheme.img.alt}/>
      <button
        style={{
          color: currentTheme.btn.textColor,
          backgroundColor: currentTheme.btn.backgroundColor
        }} 
        onClick={() => toggleTheme(theme)}>
        {`Switch to ${currentTheme.btn.textContent} Theme`}
      </button>
    </div>
  );
}

export default ThemeSwitch;