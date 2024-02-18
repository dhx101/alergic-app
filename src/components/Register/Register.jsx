import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { JwtContext } from "../../shared/components/JwtContext";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { jwt, setJwt } = useContext(JwtContext);
  const onSubmit = async (formData) => {
    console.log("enviado");
    try {
      const res = await axios.post("http://localhost:5000/registro", formData);
      console.log(res.data);
      try {
        const logIn = await axios.post("http://localhost:5000/login", formData);
        console.log(logIn.data);
        localStorage.setItem("token", logIn.data.data.token);
        localStorage.setItem("user", JSON.stringify(logIn.data.data.user));
        setJwt(true);
        console.log(
          "todo correcto, haciendo log ing",
          localStorage.getItem("token")
        );
        if (jwt) {
          navigate("/allergy1");
        }
      } catch (error) {
        console.error("error LogIn", error);
      }
    } catch (error) {
      console.error("error registro", error);
    }
  };

  return (
    <>
      <div className="">
        <Link to="/login">Volver</Link>;
        {/* aqui iría la numeración de páginas */}
        <h2>Dinos quien eres.</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nombre Completo"
          {...register("name", {
            required: true,
          })}
        />
        <input
          type="email"
          placeholder="Dirección Email"
          {...register("email", {
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
        />
        <input
          type="number"
          placeholder="Número de Teléfono"
          {...register("phone", {
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          })}
        />
        <button className="botonazul" type="submit">
          Guardar Perfil
        </button>
      </form>
    </>
  );
};

export default Register;
