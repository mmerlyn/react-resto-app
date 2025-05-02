import { useEffect, useState } from 'react';
import MenuItem from '../components/MenuItem';

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('/menu.json')
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.error('Error loading menu:', error));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
