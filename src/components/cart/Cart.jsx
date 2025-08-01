import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const {cart, totalPrice, deleteProductById, deleteAll} = useContext(CartContext)

  return (
    <div>
        <h2>Carrito</h2>
        {
            cart.map((productCart) => (
            <div>
                <img src={productCart.image} alt={productCart.name}/>
                <p>{productCart.name}</p>
                <p>{productCart.price}</p>
                <p>{productCart.quantity}</p>
                <p>precio parcial: {productCart.price * productCart.quantity}</p>

                <button onClick={() => deleteProductById(productCart.id)}>Eliminar</button>  
            </div>
            ))
        }
        
        <p>Total: ${totalPrice()}</p>

        {
          cart.length != 0 ? <button onClick={deleteAll}>Vaciar carrito</button> : <div>El carrito esta vacio</div>
        }

        {
          cart.length == 0 ? (
            <Link to="/">Comenzar Compra</Link>
          ) : (
            <Link to="/checkout">Finalizar Compra</Link>
          )
        }
    </div>
  )
}

export default Cart