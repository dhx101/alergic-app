import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';


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
    <div>
      <div>
        <button>Volver</button>
        {/* <Link to='/'><button>Volver</button></Link> */}
        <h4>2 de 4</h4>
      </div>

      <div>
        <h2>Vamos a añadir tu contacto en caso de emergencia.</h2>
        <p>Nos pondremos en contacto con tu persona de confianza y/o compañia de seguros en caso de emergencia.</p>
      </div>

      <form onSubmit={handleSubmit(submit)}>
        <input type="text" {...register("fullname", {required: true, minLength: 2}) } placeholder='Nombre completo de tu contacto'/>

        <input type="email" {...register("email", {required: true})} placeholder='Dirección e-mail'/>

        <input type="tel" {...register("mobile", {required: true})} placeholder='Móvil'/>

        <input type="text" {...register("company", {required: true, minLength: 10})} placeholder='Compañía de Seguros/Nº Póliza'/>

          <button>Guardar emergencias</button>
      </form>

      {/* <a href="#">Registraré mi contacto en otro momento</a> */}
      <Link to='/'>Registraré mi contacto en otro momento</Link>
    </div>
  )
}

export default SeleccionAlergias
