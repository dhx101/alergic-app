import React, { useState } from "react";

const Diario = () => {
    const [productos, setProductos] = useState([
        {
            diaFecha: "1 de febrero de 2024",
            producto: "Producto 1",
            imagen: "https://images.pexels.com/photos/17425856/pexels-photo-17425856/free-photo-of-blanco-y-negro-paisaje-campo-colina.jpeg",
            notas: "Notas del producto 1",
        },
        {
            diaFecha: "5 de febrero de 2024",
            producto: "Producto 2",
            imagen: "https://images.pexels.com/photos/20187789/pexels-photo-20187789/free-photo-of-blanco-y-negro-naturaleza-nubes-rocas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            notas: "Notas del producto 2",
        },
        {
            diaFecha: "10 de febrero de 2024",
            producto: "Producto 3",
            imagen: "https://images.pexels.com/photos/19806430/pexels-photo-19806430/free-photo-of-blanco-y-negro-punto-de-referencia-campo-construccion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            notas: "Notas del producto 3",
        },
        {
            diaFecha: "15 de febrero de 2024",
            producto: "Producto 4",
            imagen: "https://images.pexels.com/photos/20135107/pexels-photo-20135107/free-photo-of-resfriado-nieve-amanecer-paisaje.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            notas: "Notas del producto 4",
        },
        {
            diaFecha: "20 de febrero de 2024",
            producto: "Producto 5",
            imagen: "https://images.pexels.com/photos/2402891/pexels-photo-2402891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            notas: "Notas del producto 5",
        },
    ]);

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
