
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
// import Scan from "./components/scans/Scan";
// import ScanQR from "./components/scans/ScanQR";
// import ScanBarCode from "./components/scans/ScanBarCode";
import SeleccionAlergias from './components/alergias/SeleccionAlergias';
import SeleccionAlergias2 from './components/alergias/SeleccionAlergias2';
import SeleccionAlergias3 from './components/alergias/SeleccionAlergias3';
import SeleccionAlergias4 from './components/alergias/SeleccionAlergias4';

function App() {
  return (
    
      <div>
			<BrowserRouter>
				<Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/allergy1" element={<SeleccionAlergias/>}/>
          <Route path="/allergy2" element={<SeleccionAlergias2/>}/>
          <Route path="/allergy3" element={<SeleccionAlergias3/>}/>
          <Route path="/allergy4" element={<SeleccionAlergias4/>}/>
          <Route path="/scan" element={<Scan/>}/>
          <Route path="/scanQR" element={<ScanQR/>}/>
				<Route path="/scanBar" element={<ScanBarCode/>}/>
        </Routes>
			</BrowserRouter>

      
		</div>
  );

export default App;
