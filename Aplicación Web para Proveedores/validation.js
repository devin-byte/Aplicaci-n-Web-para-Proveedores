export function validateProvider(data) {
  const errors = [];

  if (!data.nombre.trim()) errors.push("El nombre es obligatorio.");
  if (!data.contacto.trim()) errors.push("El contacto es obligatorio.");
  if (!data.correo.trim()) errors.push("El correo es obligatorio.");
  if (!/\\S+@\\S+\\.\\S+/.test(data.correo)) errors.push("Correo inválido.");

  if (!data.telefono.trim()) errors.push("El teléfono es obligatorio.");
  if (!/^[0-9 +()-]{7,20}$/.test(data.telefono))
    errors.push("Formato de teléfono inválido.");

  if (!data.direccion.trim()) errors.push("La dirección es obligatoria.");

  return errors;
}
