import React from "react";
import { Link } from "react-router-dom";

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
      <Link to={"/login"}>Saltar</Link>
				<Link to={"/page3"}>Siguiente &#8250;</Link>
      </div>
    </div>
  );
};

export default Welocome2;
