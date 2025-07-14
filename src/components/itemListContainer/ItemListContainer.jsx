import "./itemlistcontainer.css";
import ItemList from "../itemList/ItemList"
import useGetProducts from "../../hooks/useGetProducts";
import Loading from "../loading/Loading";

const ItemListContainer = (props) => {
  
  const { products, loading } = useGetProducts()  
  
  return (
    <div className="itemlist-container">
      {
        loading ? <Loading /> : <ItemList products = {products}/>
      }
    </div>
  )
}

export default ItemListContainer