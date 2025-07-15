import { Link } from "react-router-dom"
import "./error.css"

const Error = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light error-wrapper">
      <div className="text-center">
        <h1 className="display-1 error-text">404</h1>
        <h2 className="mb-3 error-text">Página no encontrada</h2>
        <p className="text-muted mb-4 error-text">Lo sentimos, la página que estás buscando no existe.</p>
        <Link to="/" className="btn error-button px-4 py-2">Volver al inicio</Link>
      </div>
    </div>
  )
}

export default Error