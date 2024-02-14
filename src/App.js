import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Scan from "./components/scans/Scan";
import ScanQR from "./components/scans/ScanQR";
import ScanBarCode from "./components/scans/ScanBarCode";
import Homepage from "./homepage/Homepage";
import Welocome1 from "./welcome_page_1/Welocome1";
import Welocome2 from "./welcome_page_2/Welcome2";
import Welocome3 from "./welcome_page_3/Welcome3";
import Welocome4 from "./welcome_page_4/Welcome4";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/homeLog" element={<Homepage />} />
          <Route path="/page1" element={<Welocome1 />} />
          <Route path="/page2" element={<Welocome2 />} />
          <Route path="/page3" element={<Welocome3 />} />
          <Route path="/page4" element={<Welocome4 />} />
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/scanQR" element={<ScanQR />} />
          <Route path="/scanBar" element={<ScanBarCode />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
