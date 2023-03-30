import React, { createContext} from "react";

//exporto el objeto themes
export const themes = {
    light: {
    font: 'black',
    background: 'white'
    },
    dark: {
    font: 'white',
    background: 'black'
    }
    };
    
    //creo el contexto, le asigno el objeto themes.light
    const ThemeContext = createContext(themes.light);
    export default ThemeContext;