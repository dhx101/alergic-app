import React from 'react'
import './Login.css'
import Image from './Sin título-1.png'

const Login = () => {
  return (
    <>
    <img src={Image} alt="imagen cabecera del login"></img>
    <div className='container'>
      <div className="header">
        <div className="text">¡Bienvenido de nuevo!</div>
        <p>Por Favor, introduce tus datos para continuar.</p>
        <div className="underline"></div>
      </div>
      <div className="inputs">
         <div className="input">
          <input type="email" placeholder="Dirección Email"/>
        </div>
        <br></br>
         <div className="input">
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      <div className="Forgot-password">¿Olvidaste la contraseña?</div>
    </div>
    <div className="submit-container">
      <div className="submit">Entrar</div>
      <p>¿Nuevo en Applergic?</p>
      <div className="Login">Crea tu cuenta aquí</div>
    </div>
    </>
  )
}

export default Login
