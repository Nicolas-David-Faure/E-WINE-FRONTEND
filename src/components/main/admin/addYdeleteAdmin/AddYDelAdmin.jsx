import axios from "axios";
import React, { useEffect, useState } from "react";
import AddAdmin from "./AddAdmin";
import RemoveAdmin from "./RemoveAdmin";
import DeleteUser from "./DeleteUser";
import "../scss/adminPrinc.scss";

const AddYDelAdmin = () => {
  const [users, setUsers] = useState(null);
  const [update, setUpdate] = useState(false);

  const makeAdmin = (user) => {
    console.log(user);
    axios
      .put(`/api/admin/${user.id}`, { adminUser: true })
      .then(() => setUpdate(!update))
      .catch(() => alert("no se pudo hacer administrador a este usuario"));
  };

  const revokeAdmin = (user) => {
    axios
      .put(`/api/admin/${user.id}`, { adminUser: false })
      .then(() => setUpdate(!update))
      .catch(() =>
        alert(
          "no se pudo eliminar la propiedad de administrador a este usuario"
        )
      );
  };

  const deleteUser = (userId) => {
    axios
      .delete(`/api/admin/${userId}`)
      .then((result) => result.data)
      .catch(() => alert("se ha producido un erro al eliminar el usuario"));
  };

  useEffect(() => {
    axios
      .get("/api/admin")
      .then((result) => result.data)
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => console.error(error));
  }, [update]);

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
