import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

//El layout es un simple div que envuelve a nuestro proyecto donde utilizaremos nuestro context

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ background: theme.background, color: theme.font }}>
      {children}
    </div>
  );
};
export default Layout;
