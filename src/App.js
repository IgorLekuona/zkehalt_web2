import React, { useState, useEffect } from "react";

import Navbar from "./utils/Navbar";
import ScrollUpButton from "./utils/ScrollUpButton";
import useScreenWidth from "./utils/useScreenWidth";

import Portada from "./components/Portada";
import Descripcion from "./components/Descripcion";
import Tarifas from "./components/Tarifas";
import Redes from "./components/Redes";
import Contacto from "./components/Contacto";
import "./App.css";

function App() {

  const [scrollButton, setScrollButton] = useState(false);

  const {screenWidth} = useScreenWidth();

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setScrollButton(true) : setScrollButton(false);
    }

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="App">
        <Portada width={screenWidth}/>
        <Descripcion width={screenWidth}/>
        <Tarifas />
        <Redes />
        <Contacto />
      </div>
      {scrollButton && <ScrollUpButton />}
    </>
  );
}

export default App;
