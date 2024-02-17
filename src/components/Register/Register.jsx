import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = async (formData) => {
    console.log("enviado");
		try {
			await axios.post("http://localhost:5000/registro", formData).then((res) => {
				console.log(res.data);
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<div className="">
				<Link to="/login">Volver</Link>;{/* aqui iría la numeración de páginas */}
				<h2>Dinos quien eres.</h2>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					placeholder="Nombre Completo"
					{...register("name", {
						required: true
						// pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
					})}
				/>
				<input
					type="email"
					placeholder="Dirección Email"
					{...register("email", {
						required: true
						// pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
					})}
				/>
				<input
					type="number"
					placeholder="Número de Teléfono"
					{...register("phone", {
						required: true
						// pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
					})}
				/>
        <input
					type="password"
					placeholder="Password"
					{...register("password", {
						required: true,
						// pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
					})}
				/>
        <button type="submit">Enviar</button>
			</form>
			<div className="">
				<img src="../../../public/assets/subir-foto.png" alt="logo" />
			</div>
		</>
	);
};

export default Register;
