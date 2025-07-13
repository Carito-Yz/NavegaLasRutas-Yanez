import "./itemlistcontainer.css";
import getProducts from "../../data/data";
import { useEffect, useState } from "react";
import Item from "../item/Item"

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
        {
          products.map((product) => 
            <Item product = {product} key={product.id}/>
          )
        }
    </div>
  )
}

export default ItemListContainer