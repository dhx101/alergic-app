import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Diario.css";

const Diario = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/diario`);
                setProductos(res.data);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        };
        obtenerProductos();
    }, []);

    const [modoEdicion, setModoEdicion] = useState(false);
    const [notas, setNotas] = useState("");
    // const [mostrarDiv, setMostrarDiv] = useState(true);

    const activarEdicion = (id, notas) => {
        setModoEdicion(id);
        setNotas(notas);
    };

    const guardarCambios = (id) => {
        setProductos(
            productos.map((producto, i) => {
                if (i === id) {
                    return { ...producto, notas: notas };
                }
                return producto;
            })
        );
        setModoEdicion(null);
        // Aquí se pueden enviar las notas modificadas al servidor, si fuera necesario
    };

    const eliminarDiv = (id) => {
        setProductos(productos.filter((producto, i) => i !== id));
        //   setMostrarDiv(false);
    };

    return (
        <div className="containerdiario">
            <div className="botonesnav">
                <p className="botondate"></p>
                <p className="botonconfig"></p>
                <p className="botonelim"></p>
            </div>

            <div className="headerdiario">
                <h2>¿Incluimos la selección en tu Diario?</h2>
                <p>Añade tus comentarios para completar la información</p>
            </div>
            {productos.map((item, id) => (
                <div key={item.id} className="caja">
                    <div className="cajaimg">
                        <img
                            src={item.imagen}
                            alt={item.producto}
                            className="imagen"
                            style={{
                                height: "50px",
                                width: "50px",
                                backgroundSize: "cover",
                            }}
                        />
                    </div>

                    <div className="cajita">
                        <p>{item.diaFecha}</p>
                        <p>{item.producto}</p>
                        {modoEdicion === id ? (
                            <input
                                type="text"
                                value={notas}
                                onChange={(e) => setNotas(e.target.value)}
                            />
                        ) : (
                            <p>{item.notas}</p>
                        )}
                    </div>

                    <div className="cajita2">
                        <p
                            className="botonelim"
                            onClick={() => eliminarDiv(id)}
                        ></p>
                        {modoEdicion === id ? (
                            <p
                                className="tick"
                                onClick={() => guardarCambios(id)}
                            ></p>
                        ) : (
                            <p
                                className="editar"
                                onClick={() => activarEdicion(id, item.notas)}
                            ></p>
                        )}
                    </div>
                </div>
            ))}

            <div>
                <div className="botonazul">Guardar</div>
                <a href="#" className="informe">
                    <p className="informe">Generar informe</p>
                </a>
            </div>
        </div>
    );
};

export default Diario;
