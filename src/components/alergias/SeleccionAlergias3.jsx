import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-native";
import "./SeleccionAlergias3.css";

const SeleccionAlergias3 = () => {
    const [alergias, setAlergias] = useState([]);

    const getUser = async (idUser = "65ccefa12343b9a461d701af") => {
        const res = await axios.get(`http://localhost:5000/users/${idUser}`);
        console.log("resdata?", res.data.allergies);
        setAlergias(Object.keys(res.data.allergies));

        return res.data.allergies;
    };

    useEffect(() => {
        getUser();
    }, []);

    console.log(alergias);

    return (
        <div>
            <div className="botonelim2"></div>
            <div className="headerdiario">
                <h2>Confirma tu selección.</h2>
                <p>
                    A continuación te resumimos los alimentos registrados como
                    peligrosos para ti.
                </p>
            </div>

            <div>
                <h4>Marca para deseleccionar o añadir uno nuevo.</h4>
                
                {alergias?.map((item, index) => (
                    <p key={index} className="boton">{item}</p>
                ))}
                {/* <Link to="/allergy2">
                    <button>Añadir nuevos</button>
                </Link> */}
            </div>

            <div className="botonazul">Confirmar</div>
        </div>
    );
};

export default SeleccionAlergias3;
