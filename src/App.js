import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import ConfirmationPage from './pages/ConfirmationPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Header />

        <main className="pt-6 px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
