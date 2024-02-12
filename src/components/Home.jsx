import React from "react";

const Home = () => {
  const showInfo =() => {
    
  }
	return (
		<>
			<header>
        <nav></nav>
        <button onClick={showInfo}>i</button>
      </header>
			<img src="" alt="" />
			<h1>Applergic</h1>
			<p>Mi guía alimentaria</p>
			<ul>
				<li>
					<button>Escanear</button>
					<p>Escanea un nuevo producto</p>
				</li>
				<li>
					<button>Buscar</button>
					<p>Busca un comercio o restuarante para ti.</p>
				</li>
				<li>
					<button>SOS</button>
					<p>¿Necesitas ayuda urgente? contactamo con emergencias</p>
				</li>
			</ul>
      <nav>

      </nav>
		</>
	);
};

export default Home;
