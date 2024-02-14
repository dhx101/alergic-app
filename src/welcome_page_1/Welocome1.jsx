import React from "react";

const Welocome1 = () => {
  return (
    <div>
      <div className="page1">
        <img className="page1__logo" src="./assets/image_logo.png" alt="" />
        <img
          className="page1__imageSample"
          src="./assets/image_scanner.png"
          alt=""
        />
        <h3 className="page1__title">
          ¡Bienvenido a <span className="page1__title__black">Applergic</span>
        </h3>
        <p className="page1__text">
          Escanea el codigo de barras de tu producto y Applergic te dirá si es
          apto para ti.
        </p>
      </div>
      <div className="page1-buttons">
        <button className="page1-buttons__exit">Saltar</button>
        <button className="page1-buttons__next">Siguiente</button>
      </div>
    </div>
  );
};

export default Welocome1;
