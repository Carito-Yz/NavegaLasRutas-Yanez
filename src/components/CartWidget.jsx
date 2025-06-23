import { TiShoppingCart } from "react-icons/ti";
import "./cartwidget.css";

const CartWidget = () => {
  return (
    <div className="cartWidget">
      <TiShoppingCart className="carrito-icono"/>
      <h2>1</h2>
    </div>
  );
};

export default CartWidget;