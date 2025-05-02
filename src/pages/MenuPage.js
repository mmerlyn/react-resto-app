import React from 'react';
import { useSelector } from 'react-redux';
import MenuItem from '../components/MenuItem';

export default function MenuPage() {
  const menuItems = useSelector(state => state.menu.items);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Menu</h1>

      {menuItems.length === 0 ? (
        <p className="text-gray-600">No items available. Add some from the admin panel.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
