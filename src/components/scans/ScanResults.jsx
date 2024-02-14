import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ScanResults = ({ itemQR, itemBAR }) => {
	let ingredientesAlergias = [];
	const baseURL = "http://localhost:3000";
	const [food, setFood] = useState(null);
	const [user, setUser] = useState(null);

	user?.alergies.map(
		(item, index) =>
			food.ingredientes.includes(item) && ingredientesAlergias.push(item)
	);

	// AAAAAA
	const getUser = async (userID = 1) => {
		try {
			const myUser = await axios.get(`${baseURL}/users?id=${userID}`);
			setUser(myUser.data[0]);
			console.log(myUser.data[0]);
			console.log(`${baseURL}/users?id=${userID}`);
		} catch (error) {
			console.error(error);
		}
	};
	const getFoods = async (itemQR) => {
		try {
			if (itemBAR) {
				const database = await axios.get(
					`${baseURL}/barcode?QR=${itemBAR}`
				);
				setFood(database.data[0]);
			}
			if (itemQR) {
				const database = await axios.get(`${baseURL}/food?qr=${itemQR}`);
				setFood(database.data[0]);
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
		getUser();
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
								{ingredientesAlergias.map((item, index) => item)}
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
