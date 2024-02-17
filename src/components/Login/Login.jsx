import "./Login.css";
import Image from "./Sin título-1.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../../shared/components/JwtContext";

const Login = () => {
	const { register, handleSubmit } = useForm();
	const { jwt ,setJwt } = useContext(JwtContext);
	const navigate = useNavigate();
	const onSubmit = async (FormData) => {
		try {
			const res = await axios.post("http://localhost:5000/login", FormData);
			localStorage.setItem("token", res.data.data.token);
			localStorage.setItem("user", JSON.stringify(res.data.data.user));
			setJwt(true);
			if(jwt) {
				navigate('/')
			}
			
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
						type="email"
						placeholder="Dirección Email"
						{...register("email", {
							required: true,
						})}
					/>
					<input
						type="password"
						placeholder="Password"
						{...register("password", {
							required: true,
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
				<Link to="/register">Crea tu cuenta aquí</Link>
			</div>
		</>
	);
};

export default Login;
