import React from "react";

const Welocome2 = () => {
  return (
    <div>
      <div className="page1">
        <img className="page1__logo" src="./assets/image_logo.png" alt="" />
        <img
          className="page1__imageSample"
          src="./assets/image_person.png"
          alt=""
        />
        <p className="page1__text">Lleva tu Diario de compras y actividades.</p>
      </div>
      <div className="page1-buttons">
        <button className="page1-buttons__exit">Saltar</button>
        <button className="page1-buttons__next">Siguiente</button>
      </div>
    </div>
  );
};

export default Welocome2;
