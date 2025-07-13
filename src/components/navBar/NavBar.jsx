import "./navbar.css";
import logoTienda from "../../assets/logo-tienda.jpg";
import CartWidget from "../cartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="navbar">
        <div className="logo-container">
            <img className="logo" src={logoTienda} alt="logo" />
        </div>

        <div className="menu-container">
            <ul className="menu">
                <li>Pelotas</li>
                <li>Rodilleras</li>
                <li>Indumentaria</li>
            </ul>
        </div>

        <div className="cartWidget-container">
            <CartWidget />
        </div>
    </div>
  )
}

export default NavBar;