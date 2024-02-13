import React from "react";
import { Link } from "react-router-native";
const ScanResults = ({item}) => {

    


	return (
		<div>
			Aqui tienes tu resultado
            <Link to="/">Atras</Link>

            <p>{item}</p>
		</div>
	);
};

export default ScanResults;
