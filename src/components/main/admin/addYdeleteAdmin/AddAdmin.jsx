import React, { useState } from "react";
import "../scss/addAdmin.scss";

const AddAdmin = ({ makeAdmin, users }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAdd = () => {
    if (selectedUser) {
      makeAdmin(selectedUser);
    }
  };

  const handleChange = (e) => {
    const idUser = parseInt(e.target.value);
    const usersFinded = users.find((user) => user.id === idUser);
    setSelectedUser(usersFinded);
  };

  return (
    <div className="add__admin">
      <h2>Agregar Administrador</h2>
      <select
        value={selectedUser ? selectedUser.id : ""}
        onChange={handleChange}
      >
        <option value="">Selecciona un usuario</option>
        {users?.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <button onClick={handleAdd}>Agregar como Administrador</button>
    </div>
  );
};

export default AddAdmin;
