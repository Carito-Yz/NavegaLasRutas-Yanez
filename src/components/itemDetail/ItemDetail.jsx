import React from 'react'
import ("./itemDetail.css")
import { Link } from "react-router-dom";
import ItemCount from '../itemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ( {product} = []) => {

  const { addProductInCart } = useContext(CartContext);

  const addProduct = (quantity) => {
    const productCart = {...product, quantity}
    
    addProductInCart(productCart)
  }

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow w-75">

          <Link to="/" className="position-absolute top-0 start-0 m-3 text-decoration-none text-dark d-flex align-items-center">
            <i className="bi bi-arrow-left me-2"></i> Volver
          </Link>

        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={product.image} alt={product.name} className="img-fluid img-item-detail border rounded"/>
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-between mt-3 mt-md-0">
            <div>
              <p className="text-muted mb-1">Nuevo | +100 vendidos</p>
              <h4>{product.name}</h4>
              <p className="text-muted">Código: #{product.id}</p>
              <h3 className="mb-3 item-price-detail">${product.price}</h3>

              <p>
                <i className="bi bi-truck"></i> Envío gratis a todo el país
              </p>

              <p>{product.description}</p>

              <ul className="text-muted small">
                <li>Devolución gratis</li>
                <li>Garantía del vendedor</li>
                <li>Stock disponible</li>
              </ul>

              <ItemCount stock={product.stock} addProduct = {addProduct}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail