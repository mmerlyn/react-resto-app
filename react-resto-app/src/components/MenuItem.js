import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';

export default function MenuItem({ item }) {
  const dispatch = useDispatch();
  const cartItem = useSelector(state =>
    state.cart.items.find(cart => cart.id === item.id)
  );

  const handleAdd = () => {
    dispatch(addToCart(item));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
      <h3>{item.name}</h3>
      <p>${item.price.toFixed(2)}</p>

      {cartItem ? (
        <div>
          <button onClick={handleRemove}>-</button>
          <span style={{ margin: '0 10px' }}>{cartItem.quantity}</span>
          <button onClick={handleAdd}>+</button>
        </div>
      ) : (
        <button onClick={handleAdd}>Add to Cart</button>
      )}
    </div>
  );
}
