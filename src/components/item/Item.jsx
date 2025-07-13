const Item = ({product}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">$${product.price}</p>
            <hr></hr>
            <p className="card-text">{product.stock > 0 ? `Stock: ${product.stock}` : 'Sin stock'}</p>
            <a href="#" className="btn btn-primary">Más Información</a>
        </div>
    </div>
  )
}

export default Item