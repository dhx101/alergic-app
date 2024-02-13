import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from "html5-qrcode";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScanResults from "./ScanResults";

const ScanBarCode = () => {
	const [scanResult, setScanResults] = useState(null);

	useEffect(() => {
		function onScanSuccess(decodedText, decodedResult) {
			setScanResults(decodedText);
			console.log(`Code matched = ${decodedText}`, decodedResult);
		}

		const formatsToSupport = [
			Html5QrcodeSupportedFormats.UPC_A,
			Html5QrcodeSupportedFormats.UPC_E,
			Html5QrcodeSupportedFormats.UPC_EAN_EXTENSION,
			Html5QrcodeSupportedFormats.CODE_39,
			Html5QrcodeSupportedFormats.CODE_93,
			Html5QrcodeSupportedFormats.CODE_128,
			Html5QrcodeSupportedFormats.ITF,
			Html5QrcodeSupportedFormats.EAN_8,
			Html5QrcodeSupportedFormats.EAN_13,
			Html5QrcodeSupportedFormats.PDF_417,
			Html5QrcodeSupportedFormats.DATA_MATRIX,
		];
		const html5QrcodeScanner = new Html5QrcodeScanner(
			"reader",
			{
				fps: 10,
				qrbox: { width: 400, height: 250 },
				formatsToSupport: formatsToSupport,
			},
			/* verbose= */ false
		);
		html5QrcodeScanner.render(onScanSuccess);
	}, []);
	return (
		<div>
			{scanResult ? (
				<ScanResults item={scanResult} />
			) : (
				<>
					<p>Escaneando...</p>
					<p>
						Tan solo tienes que centrar el <span>código de barras</span>del producto en el recuadro
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

export default ScanBarCode;
