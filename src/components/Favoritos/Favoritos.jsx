import React, { useEffect, useState } from "react";
import GoMainMenu from "../GoMainMenu/GoMainMenu";
import MenuFooter from "../MenuFooter/MenuFooter";
import axios from "axios";

const Favoritos = () => {
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
			<main>
				<p>Tus alimentos favoritos son:</p>
                {/* {user?.favorites.map()} */}
			</main>
			<MenuFooter />
		</>
	);
};

export default Favoritos;
