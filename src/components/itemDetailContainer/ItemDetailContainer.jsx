import useGetProduct from "../../hooks/useGetProduct.js"
import Loading from "../loading/Loading.jsx"
import ItemDetail from "../itemDetail/ItemDetail.jsx"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const {idProduct} = useParams()
    const {product, loading} = useGetProduct(idProduct)

    console.log(product)

  return (
    <div>
        {
            loading ? <Loading /> : <ItemDetail product = {product} />
        }
    </div>
  )
}

export default ItemDetailContainer