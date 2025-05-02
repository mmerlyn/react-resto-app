import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';

export default function MenuItem({ item }) {
  const dispatch = useDispatch();
  const cartItem = useSelector(state =>
    state.cart.items.find(cart => cart.id === item.id)
  );

  const handleAdd = () => dispatch(addToCart(item));
  const handleRemove = () => dispatch(removeFromCart(item.id));

  return (
    <div className="bg-white border rounded-lg shadow hover:shadow-md transition overflow-hidden">
      {/* Image wrapper */}
      <div className="w-full" style={{ height: '192px', overflow: 'hidden' }}>
        <img
          src={item.image}
          alt={item.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
        <p className="text-gray-800 font-medium mb-3">${item.price.toFixed(2)}</p>

        {cartItem ? (
          <div className="flex items-center gap-2">
            <button
              onClick={handleRemove}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              -
            </button>
            <span className="font-medium">{cartItem.quantity}</span>
            <button
              onClick={handleAdd}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
