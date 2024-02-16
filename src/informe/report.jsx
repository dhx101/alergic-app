import axios from "axios";
import React, { useState } from "react";

const ReportPage = () => {
  const getInfo = (id) => {
    const res = axios.get(`http://localhost:5000/${id}`);
    setUser(res.data);
  };
  const [user, setUser] = useState(null);
  return (
    <div>
      <button>
        <a href="">volver.</a>
      </button>
      <button>
        <a href="">x</a>
      </button>
      <h3>Este es el informe basado en tu Diario.</h3>
      <p>Actividad del {user?.createdAt}</p>
      <p>Español</p>
      <p>Nombre:{user?.fullname}</p>
      <p>Alergico a:{user?.alergies}</p>
      <p>Fecha:{user?.createdAt}</p>
      <p>Nuevos productos APTOS incluidos en tu diario.</p>
      <img src="./assets/nesquick.png" alt="" />
      <p>{user?.name}</p>
      <p>{user?.createdAt}</p>
      <p>Notas:{user?.descripcion}</p>
      <p>Ingredientes:{user?.ingredientes}</p>
      <button>Guardar en PDF</button>
      <a href="">Ir a informe siguiente</a>
    </div>
  );
};

export default ReportPage;
