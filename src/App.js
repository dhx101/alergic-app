import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import ScanQR from "./components/scans/ScanQR";
import ScanBarCode from "./components/scans/ScanBarCode";
import SeleccionAlergias from "./components/alergias/SeleccionAlergias";
import SeleccionAlergias2 from "./components/alergias/SeleccionAlergias2";
import SeleccionAlergias3 from "./components/alergias/SeleccionAlergias3";
import SeleccionAlergias4 from "./components/alergias/SeleccionAlergias4";
import Homepage from "./homepage/Homepage";
import Welocome1 from "./welcome_page_1/Welocome1";
import Welocome2 from "./welcome_page_2/Welcome2";
import Welocome3 from "./welcome_page_3/Welcome3";
import Welocome4 from "./welcome_page_4/Welcome4";
import Perfil from "./components/Perfil/Perfil";
import Favoritos from "./components/Favoritos/Favoritos";
import Diario from "./components/Diario";
import { useState } from "react";
import { JwtContext } from "./shared/components/JwtContext";
import Register from "./components/Register/Register";

function App() {
	const [jwt, setJwt] = useState(localStorage.getItem("token") || null);

	return (
		<JwtContext.Provider value={{ jwt, setJwt }}>
			<div>
				<BrowserRouter>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						{jwt && <Route path="/homeLog" element={<Homepage />} />}
						{jwt && <Route path="/page1" element={<Welocome1 />} />}
						{jwt && <Route path="/page2" element={<Welocome2 />} />}
						{jwt && <Route path="/page3" element={<Welocome3 />} />}
						{jwt && <Route path="/page4" element={<Welocome4 />} />}
						{jwt && <Route path="/allergy1" element={<SeleccionAlergias />} />}
						{jwt && <Route path="/allergy2" element={<SeleccionAlergias2 />} />}
						{jwt && <Route path="/allergy3" element={<SeleccionAlergias3 />} />}
						{jwt && <Route path="/allergy4" element={<SeleccionAlergias4 />} />}
						{jwt && <Route path="/" element={<Home />} />}
						{jwt && <Route path="/scanQR" element={<ScanQR />} />}
						{jwt && <Route path="/scanBar" element={<ScanBarCode />} />}
						{jwt && <Route path="/profile" element={<Perfil />} />}
						{jwt && <Route path="/favorites" element={<Favoritos />} />}
						{jwt && <Route path="/diary" element={<Diario />} />}
					</Routes>
				</BrowserRouter>
			</div>
		</JwtContext.Provider>
	);
}

export default App;
