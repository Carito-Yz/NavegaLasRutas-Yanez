import { Link } from "react-router-dom"

const ErrorProductNotFound = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h2 className="mb-3">Producto no encontrado</h2>
        <p className="text-muted mb-4">Parece que hubo un error, intentelo nuevamente</p>
        <Link to="/" className="btn px-4 py-2">Volver al inicio</Link>
      </div>
    </div>
  )
}

export default ErrorProductNotFound