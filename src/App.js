import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Scan from "./components/scans/Scan";
import ScanQR from "./components/scans/ScanQR";
import ScanBarCode from "./components/scans/ScanBarCode";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/scan" element={<Scan/>}/>
          <Route path="/scanQR" element={<ScanQR/>}/>
				<Route path="/scanBar" element={<ScanBarCode/>}/>
        </Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
