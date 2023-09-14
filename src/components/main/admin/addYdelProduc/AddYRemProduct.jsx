import axios from "axios";
import React, { useEffect, useState } from "react";
import AddProduc from "./AddProduc";
import DeleteProduc from "./DeleteProduc";
import "../scss/addProduct.scss";
import "../scss/deleteProduct.scss";

const AddYRemProduct = () => {
  const [winesProduct, setWinesProduct] = useState(null);
  //const [updateWine, setUpdateWine] = useState(false);

  const handleProductAdded = (newProduct) => {
    setWinesProduct([...winesProduct, newProduct]);
  };

  const handleProductDeleted = (deletedProductId) => {
    const updatedProducts = winesProduct.filter(
      (product) => product.id !== deletedProductId
    );
    setWinesProduct(updatedProducts);
  };

  useEffect(() => {
    axios
      .get("/api/wines")
      .then((res) => {
        console.log(res.data);
        setWinesProduct(res.data);
      })
      .catch(() => alert("Se ha producido un error al cargar los productos"));
  }, []);

  return (
    <div>
      <div className="main__containerDelete">
        <h1>Lista de Productos</h1>
        <ul>
          {winesProduct?.map((product) => (
            <li key={product.id}>
              {product.name}{" "}
              <DeleteProduc
                productId={product.id}
                onDeleteProduct={handleProductDeleted}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="main__containerAdd">
        <AddProduc onProductAdd={handleProductAdded} />
      </div>
    </div>
  );
};

export default AddYRemProduct;
