import React, { useEffect, useState } from "react";
import GoMainMenu from "../GoMainMenu/GoMainMenu";
import MenuFooter from "../MenuFooter/MenuFooter";

const Perfil = () => {
	const [user, setUser] = useState(null);
	
	useEffect(() => {
		const userDatabase = JSON.parse(localStorage.getItem('user'))
		// console.log(userDatabase);
		setUser(userDatabase);
	}, []);

	return (
		<>
			<GoMainMenu />
			<main className="main">
				<p>¡Bienvenido {user?.fullname} !</p>
				<div>
					<p>Alergias:</p>
					{/* {user?.allergies.map((item, index) => (
						<p>{item}</p>
					))} */}
				</div>
			</main>
			<MenuFooter/>
		</>
	);
};

export default Perfil;
