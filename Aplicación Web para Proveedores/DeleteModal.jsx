export default function DeleteModal({ onCancel, onDelete }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-80">
        <h3 className="text-lg font-semibold mb-3">Confirmar Eliminación</h3>
        <p className="mb-4">¿Desea eliminar este proveedor?</p>

        <div className="flex justify-end gap-3">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onCancel}>
            Cancelar
          </button>

          <button className="px-4 py-2 bg-red-600 text-white rounded" onClick={onDelete}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
