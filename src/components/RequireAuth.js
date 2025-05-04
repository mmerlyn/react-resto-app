import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function RequireAuth({ children }) {
  const isLoggedIn = localStorage.getItem('auth') === 'true';
  const location = useLocation();

  if (!isLoggedIn) {
    toast.error('Please log in to continue.');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
