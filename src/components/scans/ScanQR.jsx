import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from "html5-qrcode";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScanResults from "./ScanResults";
const ScanQR = () => {
	const [scanResult, setScanResults] = useState(null);
	useEffect(() => {
		const html5QrCode = new Html5QrcodeScanner(
			"reader",
			{
				fps: 10,
				qrbox: 250,
				formatsToSupport: [
					Html5QrcodeSupportedFormats.QR_CODE,
					Html5QrcodeSupportedFormats.AZTEC,
				],
			},
			false
		);
		const qrCodeSuccessCallback = (decodedText, decodedResult) => {
			html5QrCode.clear();
			setScanResults(decodedText);
		};
		html5QrCode.render(qrCodeSuccessCallback);
	}, []);

	return (
		<>
			{scanResult ? (
				<ScanResults itemQR={scanResult} />
			) : (
				<div className="scan">
					<p className="scanning-text">Escaneando...</p>
					<p className="scan-text">
						Tan solo tienes que centrar el <span className="scan-text__code">código QR</span> del
						producto en el recuadro
					</p>
					<div id="reader" className="reader-qr"></div>
					<nav className="scan-nav">
						<Link className="scan-nav__link" to="/scanBar"><img src="./assets/svg/barcode.svg" alt="BARCODE"/></Link>
						<Link className="scan-nav__link" to="/scanQR"><img src="./assets/svg/qrcode.svg" alt="QR CODE"/></Link>
					</nav>
				</div>
			)}
		</>
	);
};

export default ScanQR;
