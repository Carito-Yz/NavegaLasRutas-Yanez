import { Link } from "react-router-dom"
import "./formCheckout.css"

const FormCheckout = ({dataForm, handleChangeInput, sendOrder}) => {
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
        <div className="card p-4 shadow form-body">
            <form onSubmit={sendOrder}>
                <h2 className="text-center mb-4">Checkout</h2>

                <div className="mb-3">
                    <label className="form-label">Nombre completo</label>
                    <input type="text" className="form-control" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input type="number" className="form-control" name="phone" value={dataForm.phone} onChange={handleChangeInput} required />
                </div>

                <div className="mb-4">
                    <label className="form-label">Email</label> <input type="email" className="form-control" name="email" value={dataForm.email} onChange={handleChangeInput} required />
                </div>

                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn w-50 me-2">Enviar orden</button>
                    <Link to="/cart" className="btn w-50">Volver</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FormCheckout