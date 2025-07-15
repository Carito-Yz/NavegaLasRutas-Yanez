import { TiShoppingCart } from "react-icons/ti";
import "./cartwidget.css";

const CartWidget = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <TiShoppingCart className="cart-icon"/>
      <h2>1</h2>
    </div>
  );
};

export default CartWidget;