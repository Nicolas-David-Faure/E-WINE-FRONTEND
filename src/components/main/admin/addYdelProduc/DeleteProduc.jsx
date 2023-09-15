import axios from "axios";
import React from "react";
import deleteIcon from '../../../../assets/icons/delete.svg'
const DeleteProduc = ({productId, onDeleteProduct}) => {

  const handleDelete = () => {
    axios
      .delete(`/api/wines/${productId}`)
      .then((res) => {

        onDeleteProduct(productId)
      })
      .catch(() => alert("Se ha producido un error al eliminar un producto."));
  };

  return (
    <>
      <img src={deleteIcon}  onClick={handleDelete} />
    </>
  );
};

export default DeleteProduc;
