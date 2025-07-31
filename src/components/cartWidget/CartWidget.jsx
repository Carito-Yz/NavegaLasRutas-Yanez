import { TiShoppingCart } from "react-icons/ti";
import "./cartwidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const {totalQuantity} = useContext(CartContext)

  return (
    <Link to="/cart" className="d-flex justify-content-center align-items-center">
      <TiShoppingCart className="cart-icon"/>
      <p className="cantidad-carrito">{totalQuantity()}</p>
    </Link>
  );
};

export default CartWidget;