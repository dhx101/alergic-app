import React from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
	const showInfo = () => {};
	return (
		<>
			<header>
				<nav>
					<ul>
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
							<Link to="/traductor">Tradcutor</Link>
						</li>
						<li>
							<Link to="/legal">Términos</Link>
						</li>
						<li>
							<Link to="/signout">Salir</Link>
						</li>
					</ul>
				</nav>
				<button onClick={showInfo}>i</button>
			</header>
			<img src="" alt="" />
			<h1>Applergic</h1>
			<p>Mi guía alimentaria</p>
			<ul>
				<li>
					<Link to="/scanBar">Escanear</Link>
					<p>Escanea un nuevo producto</p>
				</li>
				<li>
					<Link to="/">Buscar</Link>
					<p>Busca un comercio o restuarante para ti.</p>
				</li>
				<li>
					<a href="tel:">SOS </a>
					<p>¿Necesitas ayuda urgente? contactamo con emergencias</p>
				</li>
			</ul>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/favorites">Favoritos</NavLink>
					</li>
					<li>
						<NavLink to="/diary">Diario</NavLink>
					</li>
					<li>
						<NavLink to="/share">Compartir</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Home;
