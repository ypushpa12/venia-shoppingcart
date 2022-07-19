import React from 'react';
export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div className="container col-md-6">
      <h2>Your Shopping bag</h2>
      <div className="row">
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div><img src={item.image} height="150px" width="150px" /></div>
            {/* <div className="col-4 badge bg-info text-wrap mb-1" >{item.title}</div> */}
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="btn btn-outline-success">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="btn btn-outline-success">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12 text-center">
                <button onClick={() => alert('Checkout!')} className="btn btn-success">
                  Checkout
                </button>
              </div>
            </div>
            
          </>
        )}
      </div>
    </div>
    
  );
}
