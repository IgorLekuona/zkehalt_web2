import { useState } from "react";
import "../App.css";
import Card from "../utils/Card";

const Tarifas = () => {

    const [tarifasArray, setTarifasArray] = useState([
        {imgsrc: "../assets/Zarautz-Altxa-2023_4.jpg"},
        {imgsrc: "../assets/Zarautz-Altxa-2023_4.jpg"},
        {imgsrc: "../assets/Zarautz-Altxa-2023_4.jpg"}
    ]);

    return (
        <div className="tarifas-container">
            <h1>Tarifas</h1>
            <div className="cards-container">
                {tarifasArray.map((elem, index) => {
                    return <Card data={elem}/>
                })}
            </div>
        </div>
    );
};

export default Tarifas;