import React from "react";
//import "../styles.css"
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

const Navbar = () => {
    //uso el contexto con el estado y la función handler asignados en el provider del contexto (en App)
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  
  return (
    <div className="navbar">
      <p>Inicio</p>
      <button
        onClick={handleChangeTheme}
        style={{ background: theme.background, color: theme.font }}
      >
        Change Theme
      </button>
    </div>
  );
};
export default Navbar;
