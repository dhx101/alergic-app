import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from "html5-qrcode";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ScanResults from "./ScanResults";

const ScanQR = () => {
	const navigate = useNavigate();
	const [scanResult, setScanResults] = useState(null);
	useEffect(() => {
		//QR
		const html5QrCode = new Html5QrcodeScanner(
			"reader",
			{
				fps: 10,
				qrbox: { width: 250, height: 250 },
				formatsToSupport: [
					Html5QrcodeSupportedFormats.QR_CODE,
					Html5QrcodeSupportedFormats.AZTEC,
				],
			},
			false
		);
		const qrCodeSuccessCallback = (decodedText, decodedResult) => {
			setScanResults(decodedText);
		};
		html5QrCode.render(qrCodeSuccessCallback);
		// const config = { fps: 10, qrbox: { width: 250, height: 250 } };
		// html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback);
	}, []);

	return (
		<div>
			{scanResult ? (
				<ScanResults item={scanResult} />
			) : (
				<>
					<p>Escaneando...</p>
					<p>
						Tan solo tienes que centrar el <span>código QR</span> del
						producto en el recuadro
					</p>
					<div id="reader"></div>
				</>
			)}
			<nav>
				<Link to="/scanBar">BAR CODE</Link>
				<Link to="/scanQR">QR CODE</Link>
			</nav>
		</div>
	);
};

export default ScanQR;
