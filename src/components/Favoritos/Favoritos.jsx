import React, { useEffect, useState } from "react";
import GoMainMenu from "../GoMainMenu/GoMainMenu";
import MenuFooter from "../MenuFooter/MenuFooter";


const Favoritos = () => {
    const [user, setUser] = useState(null);

	useEffect(() => {
		const userDatabase = JSON.parse(localStorage.getItem('user'))
		// console.log(userDatabase);
		setUser(userDatabase);
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
