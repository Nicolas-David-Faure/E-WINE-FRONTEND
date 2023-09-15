import React, { useState } from "react";
//styles
import "./scss/deleteAdmin.scss";
import firstLetterCapitalized from '../../../../utils/firstLetterCapitalized'
const DeleteUser = ({ deleteUser, users }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDelete = () => {
    if (selectedUser) {
      deleteUser(selectedUser.id);
    }
  };

  const handleChange = (e) => {
    const idUser = parseInt(e.target.value);
    const usersFinded = users.find((user) => user.id === idUser);
    setSelectedUser(usersFinded);
  };

  return (
    <div className="delete__user">
      <h2>Eliminar Usuario</h2>
      <select
        value={selectedUser ? selectedUser.id : ""}
        onChange={handleChange}
      >
        <option value="">Selecciona un usuario</option>
        {users?.map((user) => (
          <option key={user.id} value={user.id}>
            {firstLetterCapitalized(user.name)}
          </option>
        ))}
      </select>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default DeleteUser;
