import React, { useState } from "react";
import "../scss/deleteAdmin.scss";

const DeleteUser = ({ deleteUser, users }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDelete = () => {
    if (selectedUser) {
      deleteUser(selectedUser.id);
    }
  };

  return (
    <div className="delete__user">
      <h2>Eliminar Usuario</h2>
      <select
        value={selectedUser ? selectedUser.id : ""}
        onChange={(e) =>
          setSelectedUser(users.find((user) => user.id === e.target.value))
        }
      >
        <option value="">Selecciona un usuario</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <button onClick={handleDelete}>Eliminar Usuario</button>
    </div>
  );
};

export default DeleteUser;
