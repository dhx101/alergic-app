import React from "react";
import "./Login.css";
import Image from "./Sin título-1.png";
import { JwtContext } from "../../shared/contexts/JwtContext";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const { setJwt } = useContext(JwtContext);

  const onSubmit = (FormData) => {
    axios.post("login", formData).then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
    });
  };
  return (
    <>
      <img src={Image} alt="imagen cabecera del login"></img>
      <div className="container">
        <div className="header">
          <div className="text">¡Bienvenido de nuevo!</div>
          <p>Por Favor, introduce tus datos para continuar.</p>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="email" placeholder="Dirección Email" />
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
              />
            </form>
          </div>
          <br></br>
          <div className="input">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="password"
                placeholder="Password"
                defaultValue={"ABCedf123"}
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                })}
              />
            </form>
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
  );
}
