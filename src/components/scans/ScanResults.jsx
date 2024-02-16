import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ScanResults = ({ itemQR, itemBAR }) => {
	let ingredientesAlergias = [];
	const baseURL = "http://localhost:5000";
	const [food, setFood] = useState(null);
	const [user, setUser] = useState(null);
	const lowerCaseAlergias = user?.allergies.map((item) => item.toLowerCase());
	const lowerCaseIngredientes = food?.ingredientes.map((item) =>
		item.toLowerCase()
	);
	
	lowerCaseAlergias?.map(
		(item) =>
			lowerCaseIngredientes?.includes(item.toLowerCase()) &&
			ingredientesAlergias.push(item.toLowerCase())
	);

	const getUser = async (userID = 1) => {
		try {
			const myUser = await axios.get(`${baseURL}/users/${userID}`);
			setUser(myUser.data);
		} catch (error) {
			console.error(error);
		}
	};
	const getFoods = async (itemQR) => {
		try {
			if (itemBAR) {
				const database = await axios.get(
					`${baseURL}/food/barcode/${itemBAR}`
				);
        
				setFood(database.data);
			}
			if (itemQR) {
				const database = await axios.get(
					`${baseURL}/food/qr/${itemQR}`
				);
				setFood(database.data);
			}
		} catch (error) {
			console.error(error);
		}
	};
  
	useEffect(() => {
		if (itemBAR) {
			getFoods(itemBAR);
		}
		if (itemQR) {
			getFoods(itemQR);
		}
	}, [itemQR, itemBAR]);

	useEffect(() => {

		getUser("65ce1d5f5a7ab82f5704a5ce");
	}, []);
	return (
		<div>
			Aqui tienes tu resultado
			<div>
				{food ? (
					<div>
						<div>
							<img src={food?.img} alt={food?.name} />
							<img src="" alt="" />
						</div>
						<p>{food?.name}</p>
						<p>
							Este producto contiene:
							{food?.ingredientes.map((item, index) => item)}.
						</p>
						{ingredientesAlergias.length !== 0 && (
							<p>
								Eres alérgico a:
								{ingredientesAlergias.map(
									(item, index) => item
								)}

							</p>
						)}
					</div>
				) : (
					"No hemos encontrado el alimento que buscabas"
				)}
			</div>
			 <Link to="/">Escanea otro producto</Link>

		</div>
	);
};

export default ScanResults;
