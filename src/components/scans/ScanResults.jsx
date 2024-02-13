import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ScanResults = ({ itemQR, itemBAR }) => {
	console.log(itemQR, itemBAR);
	const baseURL = "http://localhost:3000";
	const [food, setFood] = useState(null);
	// AAAAAA
	const getFoods = async (itemQR) => {
		try {
			if (itemBAR) {
				const database = await axios.get(
					`${baseURL}/barcode?QR=${itemBAR}`
				);
				setFood(database.data[0]);
				console.log(database.data[0]);
				console.log(`${baseURL}/barcode?QR=${itemBAR}`);
			}
			if (itemQR) {
				const database = await axios.get(`${baseURL}/food?QR=${itemQR}`);
				setFood(database.data[0]);
				console.log(database.data[0]);
				console.log(`${baseURL}/food?QR=${itemQR}`);
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

	return (
		<div>
			Aqui tienes tu resultado
			<div>
				{food ? (
					<div>
						<div>
						<img src={food?.img} alt={food?.name}/>
						<img src="" alt=""/>
						</div>
						<p>{food?.name}</p>
						<p>{food?.source}</p>
						<p>{food?.ingredientes}</p>
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
