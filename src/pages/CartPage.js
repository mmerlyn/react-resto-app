import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart, clearCart } from '../redux/cartSlice';
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
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-sm text-gray-600">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    -
                  </button>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-xl font-semibold">
            Total: ${total.toFixed(2)}
          </div>

          <button
            onClick={handleCheckout}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
