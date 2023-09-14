import axios from "axios";
import React from "react";

const DeleteProduc = ({productId, onDeleteProduct}) => {

  const handleDelete = () => {
    axios
      .delete(`/api/wines/${productId}`)
      .then((res) => {
        console.log(res.data);
        onDeleteProduct(productId)
      })
      .catch(() => alert("Se ha producido un error al eliminar un producto."));
  };

  return (
    <div>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default DeleteProduc;
