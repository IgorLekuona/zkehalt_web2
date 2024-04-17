import React, { useState } from "react";

import "../App.css";

const Portada = (width) => {

    const scrollToBottom = () => {
        window.scrollTo(0,document.body.scrollHeight);
    }

    return(
        <header className="portada-container">
            <div className="header-block">
                <div className="header-box">
                    <h1>ZKE HALTEROFILIA</h1>
                    <h4>Zarautz</h4>
                    {width.width > 1024 ?
                        
                        <div className="header-borde-grueso">
                            <h3>Halterofilia probatu nahi?</h3>
                            <h3>Animatu!!</h3>
                            <h3><span className="header-borde-grueso">PROBATU MUSUTRUK</span></h3>
                            <button className="header-button" onClick={() => scrollToBottom()}><h5>GALDETU HEMEN</h5></button>
                        </div>
                    :
                        null
                    }
                </div>
            </div>
        </header>
    ); 
}

export default Portada;