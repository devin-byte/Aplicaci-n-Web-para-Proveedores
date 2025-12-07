import { useState, useEffect } from "react";
import ProviderForm from "./components/ProviderForm";
import ProviderList from "./components/ProviderList";
import DeleteModal from "./components/DeleteModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const STORAGE_KEY = "proveedores_local";

  const [proveedores, setProveedores] = useLocalStorage(STORAGE_KEY, []);
  const [editing, setEditing] = useState(null);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  function handleCreate(proveedor) {
    setProveedores([ { ...proveedor, id: Date.now() }, ...proveedores ]);
    toast.success("Proveedor creado.");
  }

  function handleUpdate(proveedorActualizado) {
    setProveedores(
      proveedores.map((p) =>
        p.id === proveedorActualizado.id ? proveedorActualizado : p
      )
    );
    setEditing(null);
    toast.success("Proveedor actualizado.");
  }

  function handleDelete() {
    setProveedores(proveedores.filter((p) => p.id !== deleteId));
    setShowDelete(false);
    toast.success("Proveedor eliminado.");
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <ToastContainer />

      <h1 className="text-2xl font-bold mb-4">Gestor de Proveedores</h1>

      <ProviderForm
        editing={editing}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
      />

      <ProviderList
        proveedores={proveedores}
        onEdit={setEditing}
        onConfirmDelete={(id) => {
          setDeleteId(id);
          setShowDelete(true);
        }}
      />

      {showDelete && (
        <DeleteModal
          onCancel={() => setShowDelete(false)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
