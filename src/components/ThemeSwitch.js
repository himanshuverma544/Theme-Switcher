import { useContext, useEffect } from 'react';
import Context from '../contextAPI/Context';

import Image from "../components/Image";

import AppThemeObj from '../AppThemeObj';
import { getImage } from '../functions';


function ThemeSwitch() {

  const themeMode = useContext(Context);
  const currentTheme = AppThemeObj[themeMode.theme];

  useEffect(() => {
    document.querySelector("head link[rel='icon']").href = getImage(currentTheme.img.name);
    document.body.style.backgroundColor = currentTheme.body.backgroundColor;
  }, [currentTheme])
  
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
        onClick={themeMode.toggleTheme}>
        {`Switch to ${currentTheme.btn.textContent} Theme`}
      </button>
    </div>
  );
}

export default ThemeSwitch;