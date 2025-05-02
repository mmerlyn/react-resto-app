// src/pages/ConfirmationPage.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function ConfirmationPage() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-4">🎉 Order Confirmed!</h1>
      <p className="text-gray-600 mb-6">Thank you for ordering with React-Resto.</p>
      <Link
        to="/menu"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Back to Menu
      </Link>
    </div>
  );
}
