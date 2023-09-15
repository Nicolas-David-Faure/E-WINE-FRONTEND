import React, { useEffect, useState } from "react";
//axios
import axios from "axios";
//styles
import "./scss/deleteProduct.scss";
import "./scss/addProduct.scss";
//components
import AddProduc from "./AddProduc";
import DeleteProduc from "./DeleteProduc";
import EditProduct from "./EditProduct";
//icons
import editIcon from '../../../../assets/icons/edit.svg'
//utils
import truncateString from '../../../../utils/truncateString'

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
    <div className="main__addYrem_product__main">
      <div className="main__containerDelete">
        <h2>Lista de Productos</h2>
        <ul>
          {winesProduct?.map((product) => (
            <li key={product.id}>
              <img className="addAndDelete__product_image" src={product.image} alt={product.name} />
             
              <figcaption>
                <div className="addAndDelete__product_divisor">
                  <p>{truncateString(product.name, 40, true)}</p>
                  
                </div>
                <div className="addAndDelete__product_divisor">
                  <p>{product.winery}</p>
                  <p>{product.wine_type}</p>
                </div>
              </figcaption>


              <div className="main__container_btn">

                <DeleteProduc
                  productId={product.id}
                  onDeleteProduct={handleProductDeleted}
                />
                <img src={editIcon} onClick={() => setEditingProductData(product)} />
              </div>
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
