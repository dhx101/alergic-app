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

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/homeLog" element={<Homepage />} />
					<Route path="/page1" element={<Welocome1 />} />
					<Route path="/page2" element={<Welocome2 />} />
					<Route path="/page3" element={<Welocome3 />} />
					<Route path="/page4" element={<Welocome4 />} />
					<Route path="/allergy1" element={<SeleccionAlergias />} />
					<Route path="/allergy2" element={<SeleccionAlergias2 />} />
					<Route path="/allergy3" element={<SeleccionAlergias3 />} />
					<Route path="/allergy4" element={<SeleccionAlergias4 />} />
					<Route path="/" element={<Home />} />
					<Route path="/scanQR" element={<ScanQR />} />
					<Route path="/scanBar" element={<ScanBarCode />} />
					<Route path="/profile" element={<Perfil/>}/>
					<Route path="/favorites" element={<Favoritos/>}/>

				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
