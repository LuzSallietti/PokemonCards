import React, { useState } from "react";
//import "./styles.css"
import ThemeContext, { themes } from "./context/ThemeContext";
import Layout from "./components/Layout";
import Body from './components/Body';
import Navbar from "./components/Navbar";


const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const handleChangeTheme = () => {
    theme===themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };
  return (
    //llama al método Provider del contexto (ThemeContext y lo "popula" o llena con el estado y la funcion handler)
    //Use state nos permite implementar un dato dinámico en el contexto, con una función seteadora que nos permita actualizarlo
    
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <Layout>
        <Navbar/>
        <Body/>
      </Layout>
    </ThemeContext.Provider>
  );
};

export default App;
