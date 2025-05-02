import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    dispatch(clearCart());
    navigate('/confirmation');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li
                key={item.id}
                className="flex items-center gap-4 bg-white border rounded-lg p-4 shadow"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />

                {/* Item details */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500 mb-1">{item.description}</p>
                  <p className="text-sm font-medium text-gray-800">
                    {item.quantity} x ${item.price.toFixed(2)} = ${(item.quantity * item.price).toFixed(2)}
                  </p>
                </div>

                {/* Quantity controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    -
                  </button>
                  <span className="px-2 font-medium">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="px-3 py-1 bg-green-500 text-white rounded"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <h3 className="text-xl font-semibold">Total: ${total.toFixed(2)}</h3>
            <button
              onClick={handleCheckout}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
