import "./navbar.css";
import logoTienda from "../../assets/logo-tienda.jpg";
import CartWidget from "../cartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container-fluid navbar-container mb-3">
        <div className="row d-flex justify-content-between"> 
            <div className="col-2 d-flex align-items-center justify-content-center">
                <Link to="/">
                        <img className="logo" src={logoTienda} alt="logo" />
                </Link>
            </div>

            <div className="col-5 d-flex align-items-center">
                <ul className="d-flex menu w-100 justify-content-evenly">
                    <li className="col-2 text-center">
                    <Link to="/category/todo">Todo</Link>
                    </li>
                    <li className="col-2 text-center">
                    <Link to="/category/pelota">Pelotas</Link>
                    </li>
                    <li className="col-3 text-center">
                    <Link to="/category/rodilleras">Rodilleras</Link>
                    </li>
                    <li className="col-3 text-center">
                    <Link to="/category/indumentaria">Indumentaria</Link>
                    </li>
                </ul>
            </div>

            <div className="col-2 d-flex justify-content-center">
                <CartWidget />
            </div>
        </div>
    </div>
  )
}

export default NavBar;