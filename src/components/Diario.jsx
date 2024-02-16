import axios from "axios";
import React, { useEffect, useState } from "react";

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
        )
        setModoEdicion(null);
        // Aquí se pueden enviar las notas modificadas al servidor, si fuera necesario
    };

    const eliminarDiv = (id) => {
      
      setProductos(productos.filter((producto, i) => i !== id));
    //   setMostrarDiv(false);
    };

    return (
        <div>
            <div>
                <button>Date</button>
                <button>Config</button>
                <button>X</button>
            </div>

            <div>
                <h2>¿Incluimos la selección en tu Diario?</h2>
                <p>Añade tus comentarios para completar la información</p>
            </div>
            {productos.map((item, id) => (
                    <div key={item.id}>
                        <img src={item.imagen} alt={item.producto} style={{ height: "30%", width : "30%"}}/>
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

                        <button onClick={() => eliminarDiv(id)}>X</button>
                        {modoEdicion === id ? (
                            <button onClick={() => guardarCambios(id)}>Listo</button>
                        ) : (
                            <button onClick={() => activarEdicion(id, item.notas)}>Editar</button>
                        )}
                    </div>
                
            
            ))}          

            <div>
                <button>Guardar</button>
                <a href="#">Generar informe</a>
            </div>
        </div>
    );
};

export default Diario;
