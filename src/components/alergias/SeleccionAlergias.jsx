import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import "./SeleccionAlergias.css";


const SeleccionAlergias = () => {
  
  const submit = async (data)=> {
    console.log(data);

    try {
      const response = await axios.post('http://localhost:5000/emergency', data)
      console.log(response);
      
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }


  }

  const { register, handleSubmit} = useForm()
  // const { register, handleSubmit, watch, formState: {errors}} = useForm()

  return (
    <div className="containerdiario">
      <div className='volverheader'>
        {/* <button>Volver</button> */}
        <Link to='/' className="informe"><p>&#x276E; &nbsp;&nbsp; Volver</p></Link>
        <h4>2 de 4</h4>
      </div>

      <div className="headerdiario">
        <h2>Vamos a añadir tu contacto en caso de emergencia.</h2>
        <p>Nos pondremos en contacto con tu persona de confianza y/o compañia de seguros en caso de emergencia.</p>
      </div>

      <form onSubmit={handleSubmit(submit)}>
        <input type="text" {...register("fullname", {required: true, minLength: 2}) } placeholder='Nombre completo de tu contacto'/>

        <input type="email" {...register("email", {required: true})} placeholder='Dirección e-mail'/>

        <input type="tel" {...register("mobile", {required: true})} placeholder='Móvil'/>

        <input type="text" {...register("company", {required: true, minLength: 10})} placeholder='Compañía de Seguros/Nº Póliza'/>

          <div className="botonazul">Guardar emergencias</div>
      </form>

      {/* <a href="#">Registraré mi contacto en otro momento</a> */}
      <Link to='/' className="informe"><p>Registraré mi contacto en otro momento</p></Link>
    </div>
  )
}

export default SeleccionAlergias
