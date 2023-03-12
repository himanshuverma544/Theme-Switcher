import { useEffect, useContext, useRef } from 'react';
import Context from '../contextAPI/Context';

import Image from "../components/Image";

import AppThemeObj from '../AppThemeObj';
import { memoGetImage } from '../functions';


const ThemeSwitch = () => {

  const {theme, toggleTheme} = useContext(Context);
  const currentTheme = AppThemeObj[theme];
  const avoidOnce = useRef(true);

  useEffect(() => {
    loadLocalCurrentTheme();

    function loadLocalCurrentTheme() {
      const localCurrentTheme = localStorage.getItem("localCurrentTheme");
      if (localCurrentTheme === "local-dark") {
        toggleTheme(localCurrentTheme);
      }
    }
  // eslint-disable-next-line
  }, []); 

  useEffect(() => {

    if (!avoidOnce.current) {
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

    if (avoidOnce.current) {
      avoidOnce.current = false; 
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