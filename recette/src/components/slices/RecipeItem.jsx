const Cart = ({cart, removeFromCart}) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  
    return ( 
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Panier</h2>
          {
            cart.length === 0 ? (
              <p className="card-text">Votre panier est vide</p>
            ) : (
              <ul className="list-group">
                {
                  cart.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        {item.name} - {item.price} € (Quantité: {item.quantity})
                      </div>
                      <button className="btn btn-danger" onClick={() => removeFromCart(index)}>Supprimer</button>
                    </li>
                  ))
                }
              </ul>
            )
          }
          <p className="card-text mt-3">total : {total.toFixed(2)} €</p>
        </div>
      </div>
     );
  }
   
  export default Cart;