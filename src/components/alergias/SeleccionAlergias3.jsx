import React from 'react'

const SeleccionAlergias3 = () => {
  return (
    <div>
        <button>X</button>
        <div>
            <h2>Confirma tu selección.</h2>
            <p>A continuación te resumimos los alimentos registrados como peligrosos para ti.</p>
        </div>

        <div>
            <h4>Marca para deseleccionar o añadir uno nuevo.</h4>
            {/* Aqui falta llamar a los alergenos seleccionados para que los pinte aqui */}
            <button>Añadir nuevos</button>
        </div>

        <button>Confirmar</button>
    </div>
  )
}

export default SeleccionAlergias3
