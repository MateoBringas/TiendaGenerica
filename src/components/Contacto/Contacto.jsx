import React from "react";
import { useForm } from "react-hook-form";

function Contacto() {
  const { register, handleSubmit, reset } = useForm();

  const enviar = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <h1>Contacto</h1>
      <form className="formulario" onSubmit={handleSubmit(enviar)}>
        <input
          type="text"
          placeholder="Ingresa tu nombre: "
          {...register("nombre")}
        />
        <input
          type="text"
          placeholder="Ingresa tu apellido: "
          {...register("apellido")}
        />
        <input
          type="email"
          placeholder="Ingresa tu Correo electrónico: "
          {...register("email")}
        />
        <input
          type="phone"
          placeholder="Ingresa tu telefono: "
          {...register("telefono")}
        />
        <label>
          <input type="checkbox" {...register("consentimiento")} />
          Acepto los términos y condiciones.
        </label>

        <button className="enviar" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contacto;
