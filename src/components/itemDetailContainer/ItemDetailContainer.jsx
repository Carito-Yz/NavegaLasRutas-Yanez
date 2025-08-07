import useGetProduct from "../../hooks/useGetProduct.js"
import Loading from "../loading/Loading.jsx"
import ItemDetail from "../itemDetail/ItemDetail.jsx"
import { useParams, Navigate } from "react-router-dom"

const ItemDetailContainer = () => {

    const {idProduct} = useParams()
    const {product, loading} = useGetProduct(idProduct)

  return (
    <div>
        {
            loading ? <Loading /> : ( product != undefined ? <ItemDetail product = {product} /> : <Navigate to="/error"></Navigate>)
        }
    </div>
  )
}

export default ItemDetailContainer