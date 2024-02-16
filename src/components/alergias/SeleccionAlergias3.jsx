import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-native";

const SeleccionAlergias3 = () => {
    const [alergias, setAlergias] = useState([]);

    const getUser = async (idUser = "65ccefa12343b9a461d701af") => {
        const res = await axios.get(`http://localhost:5000/users/${idUser}`);
        console.log("resdata?", res.data.allergies);
        setAlergias(res.data.allergies);
        return res.data.allergies;
    };
    useEffect(() => {
        getUser();
    }, []);

    console.log(alergias);

    return (
        <div>
            <button>X</button>
            <div>
                <h2>Confirma tu selección.</h2>
                <p>
                    A continuación te resumimos los alimentos registrados como
                    peligrosos para ti.
                </p>
            </div>

            <div>
                <h4>Marca para deseleccionar o añadir uno nuevo.</h4>
                {/* Aqui falta llamar a los alergenos seleccionados para que los pinte aqui */}
                {alergias?.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
                <Link to="/allergy2">
                    <button>Añadir nuevos</button>
                </Link>
            </div>

            <button>Confirmar</button>
        </div>
    );
};

export default SeleccionAlergias3;
