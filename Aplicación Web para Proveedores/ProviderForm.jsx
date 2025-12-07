import { useState, useEffect } from "react";
import { validateProvider } from "../utils/validation";
import { toast } from "react-toastify";

export default function ProviderForm({ editing, onCreate, onUpdate }) {
  const emptyForm = {
    nombre: "",
    contacto: "",
    correo: "",
    telefono: "",
    direccion: "",
  };

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (editing) setForm(editing);
    else setForm(emptyForm);
  }, [editing]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const errors = validateProvider(form);
    if (errors.length > 0) {
      toast.error(errors[0]);
      return;
    }

    if (editing) onUpdate(form);
    else onCreate(form);

    setForm(emptyForm);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <h2 className="text-lg font-semibold md:col-span-2">
        {editing ? "Editar Proveedor" : "Nuevo Proveedor"}
      </h2>

      <input
        name="nombre"
        placeholder="Nombre"
        className="border rounded p-2"
        value={form.nombre}
        onChange={handleChange}
      />

      <input
        name="contacto"
        placeholder="Contacto"
        className="border rounded p-2"
        value={form.contacto}
        onChange={handleChange}
      />

      <input
        name="correo"
        placeholder="correo@ejemplo.com"
        className="border rounded p-2"
        value={form.correo}
        onChange={handleChange}
      />

      <input
        name="telefono"
        placeholder="Teléfono"
        className="border rounded p-2"
        value={form.telefono}
        onChange={handleChange}
      />

      <input
        name="direccion"
        placeholder="Dirección"
        className="border rounded p-2 md:col-span-2"
        value={form.direccion}
        onChange={handleChange}
      />

      <div className="flex gap-3 md:col-span-2 justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editing ? "Guardar Cambios" : "Crear Proveedor"}
        </button>
      </div>
    </form>
  );
}
