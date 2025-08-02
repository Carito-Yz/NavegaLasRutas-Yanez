import { useState } from "react"
import "./itemCount.css"

const ItemCount = ({stock, addProduct}) => {

    const [count, setCount] = useState(1)

    const handleClickDecrement = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

    const handleClickIncrement = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

  return (
    <div className="container-fluid d-flex">
        <div className="row col-8">
            <div className="d-flex col-12 mb-2">
                <button className="btn col-2" onClick={handleClickDecrement}>-</button>
                <p className="col-3 d-flex align-items-center justify-content-center item-count-text">{count}</p>
                <button className="btn col-2" onClick={handleClickIncrement}>+</button>
            </div>
            <div className="col-12">
                <button className="btn col-7" onClick={() => addProduct(count)}>Agregar al carrito</button>
            </div>
        </div>
    </div>
  )
}

export default ItemCount