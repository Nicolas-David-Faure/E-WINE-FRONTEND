import React, { useState } from "react";
//styles
import "./scss/removeAdmin.scss";
import firstLetterCapitalized from '../../../../utils/firstLetterCapitalized'
const RemoveAdmin = ({ revokeAdmin, users }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleRemove = () => {
    if (selectedUser) {
      revokeAdmin(selectedUser);
    }
  };

  const handleChange = (e) => {
    const idUser = parseInt(e.target.value);
    const usersFinded = users.find((user) => user.id === idUser);
    setSelectedUser(usersFinded);
  };

  return (
    <div className="remove__admin">
      <h2>Revocar Administrador</h2>
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
      <button onClick={handleRemove}>Revocar</button>
    </div>
  );
};

export default RemoveAdmin;
