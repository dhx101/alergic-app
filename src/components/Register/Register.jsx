import React from "react";
import { useForm } from "react-hook-form";
import { API } from "./../../Api";
import axios from "axios";

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    API.post("register", formData).then((res) => {
      console.log("Register user");
    });
  };

  return (
    <>
      <div className="">
        <Link to="/">Volver</Link>;{/* aqui iría la numeración de páginas */}
        <h2>Dinos quien eres.</h2>
      </div>
      <div className="">
        <img src="../../../public/assets/subir-foto.png" />
      </div>
    </>
  );
}
