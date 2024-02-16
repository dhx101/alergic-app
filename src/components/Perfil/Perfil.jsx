import axios from "axios";
import React, { useEffect, useState } from "react";
import GoMainMenu from "../GoMainMenu/GoMainMenu";
import MenuFooter from "../MenuFooter/MenuFooter";

const Perfil = () => {
	const [user, setUser] = useState(null);
	const baseURL = "http://localhost:5000";
	const getProfile = async (userID) => {
		const res = await axios.get(`${baseURL}/users/${userID}`);
		console.log(res.data);
		setUser(res.data);
	};

	useEffect(() => {
		getProfile("65ce1d5f5a7ab82f5704a5ce");
	}, []);

	return (
		<>
			<GoMainMenu />
			<main className="main">
				<p>¡Bienvenido {user?.fullname} !</p>
				<div>
					<p>Alergias:</p>
					{user?.allergies.map((item, index) => (
						<p>{item}</p>
					))}
				</div>
			</main>
			<MenuFooter/>
		</>
	);
};

export default Perfil;
