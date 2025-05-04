import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import ConfirmationPage from './pages/ConfirmationPage';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setMenu } from './redux/menuSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/menu.json')
      .then(res => res.json())
      .then(data => dispatch(setMenu(data)))
      .catch(err => console.error('Failed to load menu:', err));
  }, [dispatch]);

  return (
    <Router>
      <Toaster position="top-right" />
      <div className="bg-gray-100 min-h-screen">
        <Header />

        <main className="pt-6 px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            {/* Removed AdminPage */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
