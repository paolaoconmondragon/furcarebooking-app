import { useRef } from "react";
import {useForm} from "react-hook-form";

function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      correo: "",
      fechaNacimiento: "",
      password: "",
      confirmarPassword: "",
      pais: "co",
      archivo: "",
      aceptaTerminos: false,
    },
  });

  const password = useRef(null);
  password.current = watch("password", "");

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // reset({
    //   nombre: '',
    //   correo: '',
    //   fechaNacimiento: '',
    //   password: '',
    //   confirmarPassword: '',
    //   pais: 'ar',
    //   archivo: '',
    //   aceptaTerminos: false
    // })
    //pendiente de realizar
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            maxLength: 20,
            minLength: 2,
          })}
        />
        {errors.nombre?.type === "required" && <span>Nombre requerido</span>}
        {errors.nombre?.type === "maxLength" && (
          <span>Nombre no debe ser mayor a 20 caracteres</span>
        )}
        {errors.nombre?.type === "minLength" && (
          <span>Nombre debe ser mayor a 2 caracteres</span>
        )}
      </div>

      <div>
        <label>Correo Electrónico:</label>
        <input
          type="email"
          name="correo"
          {...register("correo", {
            required: {
              value: true,
              message: "Correo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Correo no válido",
            },
          })}
        />
        {errors.correo && <span>{errors.correo.message}</span>}
      </div>

      <div>
        <label>Fecha de Nacimiento:</label>
        <input
          type="date"
          name="fechaNacimiento"
          {...register("fechaNacimiento", {
            required: {
              value: true,
              message: "Fecha de nacimiento es requerida",
            },
            validate: (value) => {
              const fechaNacimiento = new Date(value);
              const fechaActual = new Date();
              const edad =
                fechaActual.getFullYear() - fechaNacimiento.getFullYear();
              return edad >= 18 || "Debes ser mayor de edad";
            },
          })}
        />
        {errors.fechaNacimiento && (
          <span>{errors.fechaNacimiento.message}</span>
        )}
      </div>
    </form>
  );
}
export default FormInputNuevaCita;
