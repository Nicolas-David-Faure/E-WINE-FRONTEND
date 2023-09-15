import axios from "axios";
import React, { useEffect, useState } from "react";
import AddProduc from "./AddProduc";
import DeleteProduc from "./DeleteProduc";
import "./scss/addProduct.scss";
import "./scss/deleteProduct.scss";
import EditProduct from "./EditProduct";

const AddYRemProduct = () => {
  const [winesProduct, setWinesProduct] = useState(null);
  const [editingProductData, setEditingProductData] = useState(null);

  const handleProductAdded = (newProduct) => {
    setWinesProduct([...winesProduct, newProduct]);
  };

  const handleProductDeleted = (deletedProductId) => {
    const updatedProducts = winesProduct.filter(
      (product) => product.id !== deletedProductId
    );
    setWinesProduct(updatedProducts);
  };

  const handleProductEdit = (editedProduct) => {
    const updatedProducts = winesProduct.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setWinesProduct(updatedProducts);
    setEditingProductData(null);
  };

  useEffect(() => {
    axios
      .get("/api/wines")
      .then((res) => {
        setWinesProduct(res.data);
      })
      .catch(() => alert("Se ha producido un error al cargar los productos"));
  }, []);

  return (
    <div>
      <div className="main__containerDelete">
        <h2>Lista de Productos</h2>
        <ul>
          {winesProduct?.map((product) => (
            <li key={product.id}>
              {product.name}{" "}
              <DeleteProduc
                productId={product.id}
                onDeleteProduct={handleProductDeleted}
              />
              <button onClick={() => setEditingProductData(product)}>
                Editar
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="main__containerAdd">
        <h2>
          {editingProductData ? "Editar Producto" : "Agregar Nuevo Producto"}
        </h2>
        {editingProductData ? (
          <EditProduct
            productId={editingProductData.id}
            productData={editingProductData}
            onEditProduct={handleProductEdit}
          />
        ) : (
          <AddProduc onProductAdd={handleProductAdded} />
        )}
      </div>
    </div>
  );
};

export default AddYRemProduct;
