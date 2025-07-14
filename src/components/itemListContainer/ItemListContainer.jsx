import "./itemlistcontainer.css";
import ItemList from "../itemList/ItemList"
import useGetProducts from "../../hooks/useGetProducts";
import Loading from "../loading/Loading";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  
  const { category } = useParams()
  const { products, loading } = useGetProducts(category)  
  
  return (
    <div className="itemlist-container">
      {
        loading ? <Loading /> : <ItemList products = {products}/>
      }
    </div>
  )
}

export default ItemListContainer