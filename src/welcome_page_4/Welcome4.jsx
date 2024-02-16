import React from "react";

const Welocome4 = () => {
  return (
    <div>
      <div className="page1">
        <img className="page1__logo" src="./assets/image_logo.png" alt="" />
        <img
          className="page1__imageSample"
          src="./assets/image_flags.png"
          alt=""
        />
        <p className="page1__text">
          Vija a donde quieras.Tendrás a tu disposicion un traductor off-line y
          tu informe de alergias e intolerancias traducido al idioma local.
        </p>
      </div>
      <div className="page1-buttons">
        <button className="page1-buttons__exit">Saltar</button>
        <button className="page1-buttons__next">Siguiente</button>
      </div>
    </div>
  );
};

export default Welocome4;
