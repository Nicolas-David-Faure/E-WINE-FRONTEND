import React, { useEffect, useState } from "react";
import AddAdmin from "./AddAdmin";
import RemoveAdmin from "./RemoveAdmin";
import DeleteUser from "./DeleteUser";
import axios from "axios";
import "../scss/adminPrinc.scss";

const AddYDelAdmin = () => {
  const [users, setUsers] = useState([]);

  const makeAdmin = (userId) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, isAdmin: true } : user
    );
    setUsers(updatedUsers);

    axios
      .put(`/api/admin/:${userId}`)
      .then((result) => result.data)
      .catch(() => alert("no se pudo hacer administrador a este usuario"));
  };

  const revokeAdmin = (userId) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, isAdmin: false } : user
    );
    setUsers(updatedUsers);

    axios
      .put(`/api/admin/:${userId}`)
      .then((result) => console.log(result.data))
      .catch(() =>
        alert(
          "no se pudo eliminar la propiedad de administrador a este usuario"
        )
      );
  };

  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);

    axios
      .delete(`/api/admin/:${userId}`)
      .then((result) => result.data)
      .catch(() => alert("se ha producido un erro al eliminar el usuario"));
  };

  useEffect(() => {
    axios
      .get("/api/admin")
      .then((result) => result.data)
      .then((users) => {
        setUsers(users);
      });
  }, []);

  return (
    <div className="main__admin">
      <h1>Administrar Usuarios</h1>
      <AddAdmin makeAdmin={makeAdmin} users={users} />
      <RemoveAdmin revokeAdmin={revokeAdmin} users={users} />
      <DeleteUser deleteUser={deleteUser} users={users} />
    </div>
  );
};

export default AddYDelAdmin;
