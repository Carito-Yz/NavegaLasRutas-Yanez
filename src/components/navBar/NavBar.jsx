import "./navbar.css";
import logoTienda from "../../assets/logo-tienda.jpg";
import CartWidget from "../cartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
        
        <div className="logo-container">
            <Link to="/">
                    <img className="logo" src={logoTienda} alt="logo" />
            </Link>
        </div>

        <div className="menu-container">
            <ul className="menu">
                <li>
                    <Link to="/category/pelota">Pelotas</Link>
                </li>
                <li>
                    <Link to="/category/rodilleras">Rodilleras</Link>
                </li>
                <li>
                    <Link to="/category/indumentaria">Indumentaria</Link>
                </li>
            </ul>
        </div>

        <div className="cartWidget-container">
            <CartWidget />
        </div>
    </div>
  )
}

export default NavBar;