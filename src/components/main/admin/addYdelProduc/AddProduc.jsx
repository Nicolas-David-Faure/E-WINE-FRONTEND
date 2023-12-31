import axios from "axios";
import React, { useState } from "react";
import cleanStateObj from "../../../../utils/cleanSatateObj";

const AddProduc = ({ onProductAdd }) => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    winery: "",
    description: "",
    wine_type: "",
    grape: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/wines/add", productData)
      .then((res) => {
        onProductAdd(res.data);
        setProductData(cleanStateObj);
      })
      .catch(() => alert("Se ha producido un error al agregar un producto."));
  };
  return (
    <div className="addProduct__main">
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Producto:</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="text"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="text"
            name="image"
            value={productData.image}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Bodega:</label>
          <input
            type="text"
            name="winery"
            value={productData.winery}
            onChange={handleInputChange}
          />
        </div>
        
        <div>
          <label>Tipo de vino:</label>
          <input
            type="text"
            name="wine_type"
            value={productData.wine_type}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Tipo de uva:</label>
          <input
            type="text"
            name="grape"
            value={productData.grape}
            onChange={handleInputChange}
          />
        </div>
        
        <div>
          <label className="addproduct_label__textarea">Descripción:</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            cols={10}
            rows={10}
          />
        </div>
        <div>
          <button type="submit">Agregar</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduc;
