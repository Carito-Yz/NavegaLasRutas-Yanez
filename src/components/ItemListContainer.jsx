import "./itemlistcontainer.css";

const ItemListContainer = (props) => {
  return (
    <div className="itemlist-container">
        {props.saludo}
    </div>
  )
}

export default ItemListContainer