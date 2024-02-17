import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./SeleccionAlergias2.css";
import axios from "axios";

const SeleccionAlergias2 = () => {
    const letras = [];

    const [alergiasUsuario, setAlergiasUsuario] = useState();
    const getUser = async (idUser = "65ccefa12343b9a461d701af") => {
        const res = await axios.get(`http://localhost:5000/users/${idUser}`);

        setAlergiasUsuario(res.data.allergies);
        return res.data.allergies;
    };

    const [alergenosDB, setAlergenos] = useState();
    const getAlergias = async () => {
        const res = await axios.get(`http://localhost:5000/allergies`);
        setAlergenos(res.data[0]);
    };
    for (const key in alergenosDB) {
        if (!(key.length > 1)) {
            letras.push(key);
        }
    }

    // let alergenos2= []

    // letras.map((item) => {
    //     alergenos2 = [...alergenos2, ...alergenosDB[item]]
    // })

    // console.log(alergenos2.includes("Ajo"));
    useEffect(() => {
        getUser();
        getAlergias();
    }, []);

    const { register, handleSubmit } = useForm();

    const patch = async (datos, idUser = "65ccefa12343b9a461d701af") => {
        console.log(`http://localhost:5000/users/${idUser}`, datos);
        await axios.patch(`http://localhost:5000/users/${idUser}`, datos);
    };

    const [alergenosSeleccionados, setAlergenosSeleccionados] = useState({});

    const handleCheckboxChange = (alergeno) => {
        setAlergenosSeleccionados((prevSeleccionados) => ({
            ...prevSeleccionados,
            [alergeno]: !prevSeleccionados[alergeno],
        }));
    };

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log("Que me devuelve esto", data);
        const alergenos2 = Object.entries(alergenosSeleccionados)
            .filter(([_, seleccionado]) => seleccionado)
            .map(([alergeno]) => alergeno);

        console.log("Alergenos seleccionados:", alergenos2);

        const datos = {
            // ...data,
            allergies: alergenosSeleccionados,
        };

        patch(datos);
        navigate("/allergy3");
    };

    return (
        <>
            <div className="containerdiario">
                <div className="volverheader">
                    <Link to="/allergy1" className="informe">
                        <p>&#x276E; &nbsp;&nbsp; Volver</p>
                    </Link>
                    <h4>3 de 4</h4>
                </div>

                <div className="headerdiario">
                    <h2>Ahora selecciona tus alergias e intolerancias.</h2>
                    <p>
                        Los elementos marcados serán identificados en tus
                        busquedas como peligrosos para ti.
                    </p>
                </div>
                <div className="letrasclick">
                    {letras?.map((letra, id) => (
                        <div key={id} className="botongris">
                            {letra}
                        </div>
                    ))}
                </div>

                <div className="alergenos">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {letras?.map((letra, id) => (
                            <div key={id}>
                                <p className="letras">{letra}</p>

                                {alergenosDB[letra].map((alergeno, id) => (
                                    <div key={id} className="check-container">
                                        <input
                                            type="checkbox"
                                            className="check"
                                            id={alergeno}
                                            {...register(alergeno)}
                                            checked={
                                                alergenosSeleccionados[
                                                    alergeno
                                                ] || false
                                            }
                                            onChange={() =>
                                                handleCheckboxChange(alergeno)
                                            }
                                        />
                                        <label
                                            htmlFor={alergeno}
                                            className="noboton"
                                        >
                                            {alergeno}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        ))}
                        {/* <Link to="/allergy3"> */}
                        <div className="botonazul" type="submit">
                            Enviar
                        </div>
                        {/* </Link> */}
                        {/* onClick={() => {onDataSelect(selectedOptions)}} */}
                    </form>
                </div>
            </div>
        </>
    );
};

export default SeleccionAlergias2;
