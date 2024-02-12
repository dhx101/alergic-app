import React, { useEffect } from "react";
import { useState } from "react";
import {
	Html5Qrcode,
	Html5QrcodeScanner,
	Html5QrcodeSupportedFormats,
} from "html5-qrcode";
const Scan = () => {
	const [scanResult, setScanResults] = useState(null);

	useEffect(() => {
    //QR
		const html5QrCode = new Html5Qrcode("reader", {
			formatsToSupport: [
				Html5QrcodeSupportedFormats.QR_CODE,
				Html5QrcodeSupportedFormats.AZTEC,
			],
		});
		const qrCodeSuccessCallback = (decodedText, decodedResult) => {
			setScanResults(decodedText);
		};
		const config = { fps: 10, qrbox: { width: 250, height: 250 } };
		html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback);


    //BARCODE
		// function onScanSuccess(decodedText, decodedResult) {
		// 	setScanResults(decodedText);
		// 	console.log(`Code matched = ${decodedText}`, decodedResult);
		// }

		// const formatsToSupport = [
		// 	Html5QrcodeSupportedFormats.UPC_A,
		// 	Html5QrcodeSupportedFormats.UPC_E,
		// 	Html5QrcodeSupportedFormats.UPC_EAN_EXTENSION,
		// 	Html5QrcodeSupportedFormats.CODE_39,
		// 	Html5QrcodeSupportedFormats.CODE_93,
		// 	Html5QrcodeSupportedFormats.CODE_128,
		// 	Html5QrcodeSupportedFormats.ITF,
		// 	Html5QrcodeSupportedFormats.EAN_8,
		// 	Html5QrcodeSupportedFormats.EAN_13,
		// 	Html5QrcodeSupportedFormats.PDF_417,
		// 	Html5QrcodeSupportedFormats.DATA_MATRIX,
		// ];
		// const html5QrcodeScanner = new Html5QrcodeScanner(
		// 	"reader",
		// 	{
		// 		fps: 10,
		// 		qrbox: { width: 500, height: 250 },
		// 		formatsToSupport: formatsToSupport,
		// 	},
		// 	/* verbose= */ false
		// );
		// html5QrcodeScanner.render(onScanSuccess);
	}, []);

	const openTab = () => {
		window.open("http://" + scanResult, "_blank");
	};

	return (
		<div>
			<h1>QR CODE SCANNER</h1>
			{scanResult ? (
				<div>
					<p>{scanResult}</p>
				</div>
			) : (
				<div id="reader"></div>
			)}
		</div>
	);
};

export default Scan;
