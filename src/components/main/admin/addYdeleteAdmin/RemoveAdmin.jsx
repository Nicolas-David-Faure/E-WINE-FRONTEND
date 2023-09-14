import React, { useState } from "react";
import "../scss/removeAdmin.scss";

const RemoveAdmin = ({ revokeAdmin, users }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleRemove = () => {
    if (selectedUser) {
      revokeAdmin(selectedUser.id);
    }
  };

  return (
    <div className="remove__admin">
      <h2>Revocar Administrador</h2>
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
      <button onClick={handleRemove}>Eliminar como Administrador</button>
    </div>
  );
};

export default RemoveAdmin;
