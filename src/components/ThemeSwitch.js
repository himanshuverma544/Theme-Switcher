import { useState, useEffect, useCallback } from 'react';

import Image from "../components/Image";

import { memoGetImage } from '../functions';

import AppThemeObj from '../AppThemeObj';


const ThemeSwitch = () => {

  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem("localCurrentTheme");
    return localTheme ? localTheme : "light";
  });

  const currentTheme = AppThemeObj[theme];


  const toggleTheme = useCallback(() => 
    setTheme(prev => prev === "light" ? "dark" : "light")
  , [setTheme]);
  
  useEffect(() => {
    
    const setLocalCurrentTheme = () => 
    localStorage.setItem("localCurrentTheme", theme);

    const switchTheme = () => {
      document.querySelector("head link[rel='icon']").href = memoGetImage(currentTheme.img.name);
      document.body.style.backgroundColor = currentTheme.body.backgroundColor;
    };

    setLocalCurrentTheme();
    switchTheme();
  }, [theme, currentTheme.img.name, currentTheme.body.backgroundColor]);


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
        onClick={toggleTheme}>
        {`Switch to ${currentTheme.btn.textContent} Theme`}
      </button>
    </div>
  );
}

export default ThemeSwitch;