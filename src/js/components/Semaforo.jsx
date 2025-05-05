import React, { useState } from "react";
import "../../styles/Semaforo.css"

//include images into your bundle


//create your first component

const Semaforo = () => { 

    const [color, setColor] = useState("red");

    return (
        <div className="Semaforo">

            <div className={`luz roja ${color === "red" ? "activa" : ""}`} onClick={() => setColor("red")}></div>
            <div className={`luz verde ${color === "green" ? "activa" : ""}`} onClick={() => setColor("green")}></div>
            <div className={`luz amarilla ${color === "yellow" ? "activa" : ""}`} onClick={() => setColor("yellow")}></div>

        </div>
    );
};

export default Semaforo;
