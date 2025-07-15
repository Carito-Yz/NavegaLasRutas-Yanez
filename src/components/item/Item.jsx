import { Link } from "react-router-dom"
import "../item/item.css";

const Item = ({product}) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3 d-flex justify-content-center">
      <div className="card card-detail" style={{ width: "18rem" }}>
          <img src={product.image} className="card-img-top" alt={product.name} />
          <div className="card-body">
              <h5 className="card-title item-text">{product.name}</h5>
              <p className="card-text item-price">$${product.price}</p>
              <hr></hr>
              <p className="card-text item-text">{product.stock > 0 ? `Stock: ${product.stock}` : 'Sin stock'}</p>
              <Link to={`/detail/${product.id}`}>
                <p className="btn card-buton item-text">Más Información</p>
              </Link>
          </div>
      </div>
    </div>
  )
}

export default Item