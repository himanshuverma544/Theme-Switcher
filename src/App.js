import './App.css';

import Provider from './contextAPI/Provider';

import ThemeSwitch from "./components/ThemeSwitch";


function App() {

  return (
    <Provider>
      <ThemeSwitch/>
    </Provider>
  );
}

export default App;