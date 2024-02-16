import React from 'react'
import { Link } from 'react-router-dom'

const SeleccionAlergias4 = () => {
  return (
    <div>
        <div>
            {/* <button>Volver</button> */}
            <Link to='/allergy3'><button>Volver</button></Link>
            <h4>4 de 4</h4>
            <button>X</button>
        </div>

        <div>
            <img src='https://th.bing.com/th/id/R.ef4976aa12307a4de34b2e6226ce336f?rik=st%2b0QjjS%2fTgvdg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fhand-transparent-png%2fhand-transparent-png-22.png&ehk=XRi9DJNaBvbgthEqcBAXZNVuY1kklPlbjYB8orhJSP0%3d&risl=&pid=ImgRaw&r=0' alt='ok'/>
            <h2>Hemos terminado, ya puedes escanear tu primer producto.</h2>
        </div>

        <Link to='/scanQR'><button>Escanea un producto</button></Link>
        
    </div>
  )
}

export default SeleccionAlergias4
