import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ScanResults = ({ itemQR, itemBAR }) => {
	let ingredientesAlergias = [];
	const baseURL = "http://localhost:5000";
	const [food, setFood] = useState(null);
	const [user, setUser] = useState(null);

	const lowerCaseAlergias = user?.allergies.map((item) => item.toLowerCase());
	const lowerCaseIngredientes = food?.ingredientes.map((item) => item.toLowerCase());

	console.log(lowerCaseAlergias, lowerCaseIngredientes);

	lowerCaseAlergias?.map(
		(item) =>
			lowerCaseIngredientes?.includes(item.toLowerCase()) &&
			ingredientesAlergias.push(item.toLowerCase())
	);

	useEffect(() => {
		const getFoods = async (itemQR) => {
			try {
				if (itemBAR) {
					const database = await axios.get(`${baseURL}/food/barcode/${itemBAR}`);

					setFood(database.data);
				}
				if (itemQR) {
					const database = await axios.get(`${baseURL}/food/qr/${itemQR}`);
					setFood(database.data);
				}
			} catch (error) {}
		};
		if (itemBAR) {
			getFoods(itemBAR);
		}
		if (itemQR) {
			getFoods(itemQR);
		}
	}, [itemQR, itemBAR]);

	useEffect(() => {
		const userDatabase = JSON.parse(localStorage.getItem("user"));
		// console.log(userDatabase);
		setUser(userDatabase);
	}, []);
	return (
		<div className="scan-results">
			Aqui tienes tu resultado
			<div>
				{food ? (
					<div className="scan-results-info">
						{ingredientesAlergias.length === 0 ? (
							<>
								<p>Este producto es apto para ti.</p>
								<img
									className="Apto"
									src={food?.img}
									alt={food?.name}
								/>
							</>
						) : (
							<>
								<p>
									Este producto <strong>NO</strong> es apto para ti.
								</p>
								<img
									className="noApto"
									src={food?.img}
									alt={food?.name}
								/>
							</>
						)}
						<p>{food?.name}</p>
						<p>
							Este producto contiene:
							<ul>
								{food?.ingredientes.map((item, index) => (
									<li>{item}</li>
								))}
							</ul>
						</p>
					</div>
				) : (
					<p>"No hemos encontrado el alimento que buscabas"</p>
				)}
			</div>
			<Link
				className="botonazul"
				to="/">
				Escanea otro producto
			</Link>
		</div>
	);
};

export default ScanResults;
