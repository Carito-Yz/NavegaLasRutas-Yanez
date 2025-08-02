import { useContext, useState } from "react"
import {CartContext} from "../../context/CartContext"
import FormCheckout from "../formCheckout/FormCheckout"
import { addDoc, collection } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"

const Checkout = () => {

    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })
    const [orderId, setOrderId] = useState(null)

    const {cart, totalPrice, deleteAll} = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm({...dataForm, [event.target.name] : event.target.value})
    }

    const sendOrder = (event) => {
        event.preventDefault()
        
        const order = {
            buyer: {...dataForm},
            products: {...cart},
            total: totalPrice(),
            fechaCreacion: Date.now()
        }

        uploadOrder(order)
    }

    const uploadOrder = async(order) => {
        try {
            const orderRef = collection(db, "orders")
            const response = await addDoc(orderRef, order)

            setOrderId(response.id)
            deleteAll()

        } catch (error) {
            console.log("Error al subir la orden")
        }
    }

  return (
    <div>
        {
            orderId ? (
                <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
                    <div className="text-center">
                        <h2 className="mb-3">Orden generada correctamente</h2>
                        <p className="text-muted mb-4">Guarde el identificador de su orden: {orderId}</p>
                        <Link to="/"><button className="btn">Volver al inicio</button></Link>
                    </div>
                </div>
            ) : (
                <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} sendOrder={sendOrder}/>
            )
        }
    </div>
  )
}

export default Checkout