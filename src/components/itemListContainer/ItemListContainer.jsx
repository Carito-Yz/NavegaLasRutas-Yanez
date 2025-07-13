import "./itemlistcontainer.css";
import getProducts from "../../data/data";
import { useEffect, useState } from "react";

const ItemListContainer = (props) => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {

    getProducts()
    .then((data) => {
        setProducts(data)
    })

  }, [])

  console.log(products)
  
  return (
    <div className="itemlist-container">
        {props.saludo}
    </div>
  )
}

export default ItemListContainer