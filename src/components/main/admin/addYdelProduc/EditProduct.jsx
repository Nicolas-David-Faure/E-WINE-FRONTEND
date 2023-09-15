import axios from "axios";
import React, { useState } from "react";

const EditProduct = ({ productId, onEditProduct, productData }) => {
  const [editedProduct, setEditedProduct] = useState(productData);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`/api/wines/${productId}`, editedProduct)
      .then((result) => {
        onEditProduct(result.data);
      })
      .catch((error) => console.error("Error al editar el producto", error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  return (
    <div className="addProduct__main">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Producto:</label>
          <input
            type="text"
            name="name"
            value={editedProduct.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="text"
            name="price"
            value={editedProduct.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="text"
            name="image"
            value={editedProduct.image}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Bodega:</label>
          <input
            type="text"
            name="winery"
            value={editedProduct.winery}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Tipo de vino:</label>
          <input
            type="text"
            name="wine_type"
            value={editedProduct.wine_type}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Tipo de uva:</label>
          <input
            type="text"
            name="grape"
            value={editedProduct.grape}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={editedProduct.description}
            onChange={handleInputChange}
            cols={10}
            rows={10}
          />
        </div>
        <div>
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
