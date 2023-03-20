import React from "react";

const ProductsList = ({ product, selectProduct, deleteProduct }) => {
  return (
    <div className="productList">
      <ul className="conteiner-card">
        {product?.map((product) => (
          <li key={product.id} className="cardProduct">
            <h4>
              <span>Nombre: {product.name}</span>
            </h4>
            <h4>
              <span>Categoria: {product.category}</span>
            </h4>
            <h4>
              <span>Precio: {product.price}</span>
            </h4>
            <h4>
              <span>Disponivilidad: {product.isAvailable? 'Disponible':'No Disponible'}</span>
            </h4>
            <div className="containerBtn">
              <button onClick={() => deleteProduct(product.id)} className="btnDelete"><i className='bx bxs-x-circle'></i></button>
              <button onClick={() => selectProduct(product)} className="btnUpdate"><i className='bx bxs-edit-alt'></i></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
