import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from "html5-qrcode";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScanResults from "./ScanResults";
import GoMainMenu from "../GoMainMenu/GoMainMenu";

const ScanBarCode = () => {
	const [scanResult, setScanResults] = useState(null);

	useEffect(() => {
		function onScanSuccess(decodedText, decodedResult) {
			html5QrcodeScanner.clear();
			setScanResults(decodedText);
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
			<GoMainMenu/>
			<main>
				{scanResult ? (
					<ScanResults itemBAR={scanResult} />
				) : (
					<div className="scan">
						<p className="scan-text">Escaneando...</p>
						<p className="scan-text">
							Tan solo tienes que centrar el{" "}
							<span className="scan-text__code">
								código de barras{" "}
							</span>{" "}
							del producto en el recuadro
						</p>
						<div id="reader" className="reader-bar"></div>
						<nav className="scan-nav">
							<Link className="scan-nav__link" to="/scanBar">
								<img
									src="./assets/svg/barcode.svg"
									alt="BARCODE"
								/>
							</Link>
							<Link className="scan-nav__link" to="/scanQR">
								<img
									src="./assets/svg/qrcode.svg"
									alt="QR CODE"
								/>
							</Link>
						</nav>
					</div>
				)}
			</main>
		</div>
	);
};

export default ScanBarCode;
