import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart } from '../redux/cartSlice';

export default function CartPage() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrease = (item) => {
    dispatch(addToCart(item));
  };

  const handleCheckout = () => {
    alert('Order placed successfully!');
    cartItems.forEach(item => dispatch(removeFromCart(item.id)));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map(item => (
              <li key={item.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <strong>{item.name}</strong><br />
                    Quantity: {item.quantity}<br />
                    Price: ${item.price.toFixed(2)}<br />
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <div>
                  <button onClick={() => handleRemove(item.id)}>-</button>
                  <button onClick={() => handleIncrease(item)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
  
          <h3>Total: ${total.toFixed(2)}</h3>
  
          {/* ✅ Only one checkout button */}
          <button
            onClick={handleCheckout}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1.5rem',
              background: '#000',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );  
}
