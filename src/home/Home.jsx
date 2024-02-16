import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MenuFooter from "../components/MenuFooter/MenuFooter";
import axios from "axios";
import { JwtContext } from "../shared/components/JwtContext";

const Home = () => {
	const [showList, setShowList] = useState(false);
	const [modal, setModal] = useState(false);
	const {setJwt} = useContext(JwtContext)
	const showInfo = () => {
		setShowList(!showList);
	};
	const showModal = (value) => {
		setModal(value);
	};
	const logToken = () => {
		let token = JSON.parse(localStorage.getItem("user"));
		console.log(token);
	};
	const singOut = () => {
		try {
			axios.post("http://localhost:5000/logout").then((res) => {
				localStorage.setItem("token", null);
				localStorage.setItem("user", null);
				setJwt(false)
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<header className="header">
				<div className="menu-burguer" onClick={showInfo}>
					<div className="menu-bar"></div>
					<div className="menu-bar"></div>
					<div className="menu-bar"></div>
				</div>
				<nav className="header-nav">
					<ul className={showList ? "header-nav-list show-list" : "header-nav-list"}>
						<button onClick={showInfo}>X</button>
						<li>
							<Link className="header-nav-list__item" to="/profile">
								Perfil
							</Link>
						</li>
						<li>
							<Link className="header-nav-list__item" to="/favorites">
								Favoritos
							</Link>
						</li>
						<li>
							<Link className="header-nav-list__item" to="/diary">
								Diario
							</Link>
						</li>
						<li>
							<Link className="header-nav-list__item" to="/share">
								Compartir
							</Link>
						</li>
						<li>
							<Link className="header-nav-list__item" to="/traductor">
								Traductor
							</Link>
						</li>
						<li>
							<Link className="header-nav-list__item" to="/legal">
								Términos
							</Link>
						</li>
						<li>
							<Link className="header-nav-list__item" to="/login" onClick={singOut}>
								Sing Out
							</Link>
						</li>
					</ul>
				</nav>
				<div className="modal-info">
					<p
						className="information-box"
						onMouseEnter={() => {
							showModal(true);
						}}
						onMouseLeave={() => {
							showModal(false);
						}}>
						i
					</p>
					<p className={modal ? "modal-show" : "modal"}>Gracias por usar AlergicAPP</p>
				</div>
			</header>
			<main className="main">
				<div className="main-logo">
					<img src=".\assets\logoApplergicFigurasGiro.png" alt="Applergic" />
					<h1 className="title">Applergic</h1>
					<p>Tu guía alimentaria</p>
				</div>
				<ul className="main-nav">
					<li className="main-nav-item">
						<Link className="main-nav__btn btn-scan" to="/scanBar">
							Escanear
						</Link>
						<p>Escanea un nuevo producto</p>
					</li>
					<li className="main-nav-item">
						<Link className="main-nav__btn btn-search" to="/">
							Buscar
						</Link>
						<p>Busca un comercio o restuarante para ti.</p>
					</li>
					<li className="main-nav-item ">
						<a className="main-nav__btn btn-sos" href="tel:">
							SOS{" "}
						</a>
						<p>¿Necesitas ayuda urgente? contactamos con emergencias</p>
					</li>
				</ul>
			</main>
			<button onClick={logToken}>Boton</button>
			<MenuFooter />
		</>
	);
};

export default Home;
