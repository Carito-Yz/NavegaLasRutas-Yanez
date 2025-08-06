import "./navbar.css";
import logoTienda from "../../assets/logo-tienda.jpg";
import CartWidget from "../cartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container-fluid navbar-container mb-3">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="row w-100 align-items-center justify-content-between">

                    <div className="col-2 d-flex justify-content-center align-items-center order-1 order-lg-1">
                        <Link to="/">
                            <img className="logo" src={logoTienda} alt="logo" />
                        </Link>
                    </div>

                    <div className="col-2 d-flex justify-content-end d-lg-none order-3">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse col-12 col-lg-7 order-4 order-lg-2 mt-3 mt-lg-0" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex menu w-100 justify-content-evenly align-items-center">
                            <li className="nav-item col-2 text-center">
                                <Link to="/category/todo" className="nav-link">Todo</Link>
                            </li>
                            <li className="nav-item col-2 text-center">
                                <Link to="/category/pelota" className="nav-link">Pelotas</Link>
                            </li>
                            <li className="nav-item col-3 text-center">
                                <Link to="/category/rodilleras" className="nav-link">Rodilleras</Link>
                            </li>
                            <li className="nav-item col-3 text-center">
                                <Link to="/category/indumentaria" className="nav-link">Indumentaria</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-2 d-flex justify-content-center align-items-center order-2 order-lg-3">
                        <CartWidget />
                    </div>

                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar;