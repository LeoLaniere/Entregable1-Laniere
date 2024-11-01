import './ItemDetail.css'
const ItemDetail = ({product}) =>{
    return (
        <div className="item-detail">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={product.image} class="img-fluid" alt={product.name}/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">{product.description}</p>
                    <p class="card-text">${product.price}</p>
                    <button class="CartBtn">
                         <p class="CartBtn-text">Agregar al Carrito</p>
                     </button>
                  </div>
                </div>
              </div>
            </div>
            
        </div>
    )
}

export default ItemDetail