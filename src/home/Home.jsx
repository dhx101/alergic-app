import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuFooter from "../components/MenuFooter/MenuFooter";

const Home = () => {
	const [showList, setShowList] = useState(false);
	const [modal, setModal] = useState(false);

	const showInfo = () => {
		setShowList(!showList);
	};
	const showModal = (value) => {
		setModal(value);
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
					<ul
						className={
							showList
								? "header-nav-list show-list"
								: "header-nav-list"
						}>
						<button onClick={showInfo}>X</button>
						<li>
							<Link to="/profile">Perfil</Link>
						</li>
						<li>
							<Link to="/favorites">Favoritos</Link>
						</li>
						<li>
							<Link to="/diary">Diario</Link>
						</li>
						<li>
							<Link to="/share">Compartir</Link>
						</li>
						<li>
							<Link to="/traductor">Traductor</Link>
						</li>
						<li>
							<Link to="/legal">Términos</Link>
						</li>
						<li>
							<Link to="/signout">Salir</Link>
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
					<p className={modal ? "modal-show" : "modal"}>
						Gracias por usar AlergicAPP
					</p>
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
						<Link className="main-nav__btn btn-scan" to="/scanBar">Escanear</Link>
						<p>Escanea un nuevo producto</p>
					</li>
					<li className="main-nav-item">
						<Link className="main-nav__btn btn-search" to="/">Buscar</Link>
						<p>Busca un comercio o restuarante para ti.</p>
					</li>
					<li className="main-nav-item ">
						<a className="main-nav__btn btn-sos" href="tel:">SOS </a>
						<p>
							¿Necesitas ayuda urgente? contactamos con
							emergencias
						</p>
					</li>
				</ul>
			</main>
			<MenuFooter/>
		</>
	);
};

export default Home;
