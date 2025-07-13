import Item from "../item/Item"

const ItemList = ({products}) => {
  return (
    <div>
        {
          products.map((product) => 
            <Item product = {product} key={product.id}/>
          )
        }
    </div>
  )
}

export default ItemList