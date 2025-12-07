export default function ProviderList({ proveedores, onEdit, onConfirmDelete }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">
        Lista de Proveedores ({proveedores.length})
      </h2>

      {proveedores.length === 0 ? (
        <p>No hay proveedores registrados.</p>
      ) : (
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="p-2">Nombre</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Correo</th>
              <th className="p-2">Teléfono</th>
              <th className="p-2">Dirección</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {proveedores.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="p-2">{p.nombre}</td>
                <td className="p-2">{p.contacto}</td>
                <td className="p-2">{p.correo}</td>
                <td className="p-2">{p.telefono}</td>
                <td className="p-2">{p.direccion}</td>

                <td className="p-2 flex gap-2">
                  <button
                    onClick={() => onEdit(p)}
                    className="bg-yellow-400 px-2 py-1 rounded"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => onConfirmDelete(p.id)}
                    className="bg-red-600 px-2 py-1 rounded text-white"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
