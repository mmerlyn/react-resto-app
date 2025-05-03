import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, Pizza, ShoppingCart, Settings } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = useSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const navLinkBase =
    'flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors';
  const activeClass = 'text-blue-600 font-semibold';

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 h-16">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
          <Home size={20} />
          React Resto
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="sm:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-6 text-base font-medium">
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? activeClass : ''}`
            }
          >
            <Pizza size={18} />
            Menu
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? activeClass : ''}`
            }
          >
            <div className="relative flex items-center">
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="ml-1">Cart</span>
          </NavLink>

          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? activeClass : ''}`
            }
          >
            <Settings size={18} />
            Admin
          </NavLink>
        </nav>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="sm:hidden px-4 pb-4 flex flex-col gap-3 text-base font-medium text-gray-700">
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? activeClass : ''}`
            }
            onClick={() => setIsOpen(false)}
          >
            <Pizza size={18} />
            Menu
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? activeClass : ''}`
            }
            onClick={() => setIsOpen(false)}
          >
            <div className="relative flex items-center">
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="ml-1">Cart</span>
          </NavLink>

          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? activeClass : ''}`
            }
            onClick={() => setIsOpen(false)}
          >
            <Settings size={18} />
            Admin
          </NavLink>
        </nav>
      )}
    </header>
  );
}
