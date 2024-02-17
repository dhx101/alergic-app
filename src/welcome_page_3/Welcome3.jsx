import React from "react";
import { Link } from "react-router-dom";

const Welocome3 = () => {
  return (
    <div>
      <div className="page1">
        <img className="page1__logo" src="./assets/image_logo.png" alt="" />
        <img
          className="page1__imageSample"
          src="./assets/image_ambulance.png"
          alt=""
        />
        <p className="page1__text">
          En caso de emergencia nos pondremos en contacto con la persona que nos
          digas.
        </p>
      </div>
      <div className="page1-buttons">
      <Link to={"/login"}>Saltar</Link>
				<Link to={"/page4"}>Siguiente &#8250;</Link>
      </div>
    </div>
  );
};

export default Welocome3;
