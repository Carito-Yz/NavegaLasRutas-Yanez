import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./cart.css"

const Cart = () => {
    const {cart, totalPrice, deleteProductById, deleteAll} = useContext(CartContext)

  return (
    <div className="container my-5 cart-container">
      <h2 className="mb-4 text-center">Carrito de compras</h2>

      {cart.length > 0 ? (
        <div className="row">
          <div className="col-md-8">
            {cart.map((product) => (
              <div className="card mb-3 cart-item shadow border">
                <div className="row g-0 align-items-center">
                  <div className="col-md-3 text-center product-img-container">
                    <img src={product.image} alt={product.name} className="img-fluid rounded-start product-img" />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title mb-1">{product.name}</h5>
                      <p className="card-text mb-1 text-muted">Precio unitario: ${product.price}</p>
                      <p className="card-text mb-1">Cantidad: {product.quantity}</p>
                      <p className="card-text fw-semibold">Subtotal: ${product.price * product.quantity}</p>
                    </div>
                  </div>
                  <div className="col-md-3 text-end pe-3">
                    <button className="btn btn-sm" onClick={() => deleteProductById(product.id)}><i class="bi bi-trash"> Eliminar</i></button>
                  </div>
                </div>
              </div>
            ))}
            <button className="btn mb-3 btn-empty-cart me-3" onClick={deleteAll}>Vaciar carrito</button>
            <Link to="/"><button className="btn mb-3">Volver al Inicio</button></Link>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h4 className="mb-3">Resumen</h4>
              <p className="fs-5">Total: <strong>${totalPrice()}</strong></p>
              <Link to="/checkout">
                <button className="btn w-100">Finalizar compra</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center my-5">
          <h4 className="text-muted">El carrito está vacío</h4>
          <Link to="/" className="btn mt-3">Comenzar compra</Link>
        </div>
      )}
    </div>
  )
}

export default Cart