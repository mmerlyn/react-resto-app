import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Home, Pizza, ShoppingCart, User } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const cartCount = useSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    setIsLoggedIn(auth === 'true');
  }, [location.pathname]); // re-check login status on route change

  const handleLogout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    window.location.reload();
  };

  const navLinkBase =
    'flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors duration-200';
  const activeClass = 'bg-blue-100 text-blue-700 font-semibold';
  const hoverClass = 'hover:bg-blue-50 hover:text-blue-600';

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 h-16">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-blue-700 tracking-tight"
        >
          <Home size={24} className="text-blue-500" />
          <span className="font-sans text-blue-700">ReactResto</span>
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="sm:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-4 text-base font-medium items-center">
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? activeClass : 'text-gray-700'} ${hoverClass}`
            }
          >
            <Pizza size={18} />
            Menu
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? activeClass : 'text-gray-700'} ${hoverClass}`
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
            <span>Cart</span>
          </NavLink>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className={`${navLinkBase} text-red-600 hover:text-red-800`}
            >
              <User size={18} />
              <span>Logout</span>
            </button>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `${navLinkBase} ${isActive ? activeClass : 'text-gray-700'} ${hoverClass}`
                }
              >
                <User size={18} />
                <span>Login</span>
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `${navLinkBase} ${isActive ? activeClass : 'text-gray-700'} ${hoverClass}`
                }
              >
                <User size={18} />
                <span>Register</span>
              </NavLink>
            </>
          )}
        </nav>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="sm:hidden px-4 pb-4 flex flex-col gap-3 text-base font-medium text-gray-700">
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? activeClass : ''} ${hoverClass}`
            }
            onClick={() => setIsOpen(false)}
          >
            <Pizza size={18} />
            Menu
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? activeClass : ''} ${hoverClass}`
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
            <span>Cart</span>
          </NavLink>

          {isLoggedIn ? (
            <button
              onClick={() => {
                setIsOpen(false);
                handleLogout();
              }}
              className={`${navLinkBase} text-red-600 hover:text-red-800`}
            >
              <User size={18} />
              <span>Logout</span>
            </button>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `${navLinkBase} ${isActive ? activeClass : ''} ${hoverClass}`
                }
                onClick={() => setIsOpen(false)}
              >
                <User size={18} />
                <span>Login</span>
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `${navLinkBase} ${isActive ? activeClass : ''} ${hoverClass}`
                }
                onClick={() => setIsOpen(false)}
              >
                <User size={18} />
                <span>Register</span>
              </NavLink>
            </>
          )}
        </nav>
      )}
    </header>
  );
}
