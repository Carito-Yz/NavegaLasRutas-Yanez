import "./itemlistcontainer.css";
import getProducts from "../../data/data";
import { useEffect, useState } from "react";
import ItemList from "../itemList/ItemList"

const ItemListContainer = (props) => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {

    getProducts()
    .then((data) => {
        setProducts(data)
    })

  }, [])
  
  return (
    <div className="itemlist-container">
        <ItemList products = {products}/>
    </div>
  )
}

export default ItemListContainer