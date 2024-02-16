import React from "react";
import { NavLink } from "react-router-dom";

const MenuFooter = () => {
	return (
		<footer className="footer">
			<nav>
				<ul className="footer-nav">
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
		</footer>
	);
};

export default MenuFooter;
