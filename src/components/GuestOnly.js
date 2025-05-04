import React from 'react';
import { Navigate } from 'react-router-dom';

export default function GuestOnly({ children }) {
  const isLoggedIn = localStorage.getItem('auth') === 'true';

  if (isLoggedIn) {
    return <Navigate to="/menu" replace />;
  }

  return children;
}
