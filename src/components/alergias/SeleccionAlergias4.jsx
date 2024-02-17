import React from 'react'
import { Link } from 'react-router-dom'
import "./SeleccionAlergias2.css";

const SeleccionAlergias4 = () => {
  return (
    <div className="containerdiario">
        <div className='volverheader'>
            {/* <button>Volver</button> */}
            <Link to='/allergy3' className="informe"><p>&#x276E; &nbsp;&nbsp; Volver</p></Link>
            <h4>4 de 4</h4>
            <div className="botonelim2"></div>
        </div>

        <div>
            <img src='https://th.bing.com/th/id/R.ef4976aa12307a4de34b2e6226ce336f?rik=st%2b0QjjS%2fTgvdg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fhand-transparent-png%2fhand-transparent-png-22.png&ehk=XRi9DJNaBvbgthEqcBAXZNVuY1kklPlbjYB8orhJSP0%3d&risl=&pid=ImgRaw&r=0' alt='ok' style={{
                                height: "500px",
                                width: "600px",
                                backgroundSize: "cover",
                                margin: "10% 0"
                            }}/>
            <h2 className="headerdiario">Hemos terminado, ya puedes escanear tu primer producto.</h2>
        </div>

        <Link to='/scanQR'><div className="botonazul">Escanea un producto</div></Link>
        
    </div>
  )
}

export default SeleccionAlergias4
