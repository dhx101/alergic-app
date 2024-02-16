import "./Login.css";
import Image from "./Sin título-1.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../../shared/components/JwtContext";

const Login = () => {
	const { register, handleSubmit } = useForm();
  const {setJwt} = useContext(JwtContext)
	const onSubmit = (FormData) => {
		console.log("Enviado");
    try {
      axios.post("http://localhost:5000/login", FormData).then((res) => {
      console.log(res.data.data.token);
			localStorage.setItem("token", res.data.data.token);
			localStorage.setItem("user", JSON.stringify(res.data.data.user));
      setJwt(true)
		});
    } catch (error) {
      console.log(error);
    }
		
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
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type="text"
						placeholder="Dirección Email"
						{...register("email", {
							required: true
							// pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
						})}
					/>
					<input
						type="password"
						placeholder="Password"
						{...register("password", {
							required: true
							// pattern:
							// 	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
						})}
					/>
					<button type="submit">Enviar</button>
				</form>
			</div>
			<div className="Forgot-password">¿Olvidaste la contraseña?</div>
			<div className="submit-container">
				<p>¿Nuevo en Applergic?</p>
				<div className="Login">Crea tu cuenta aquí</div>
			</div>
      <Link to="/">Home</Link>
		</>
	);
};

export default Login;
