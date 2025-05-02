// pages/MenuPage.js
import MenuItem from '../components/MenuItem';

const dummyMenu = [
  { id: 1, name: 'Burger', price: 5.99 },
  { id: 2, name: 'Pizza', price: 8.49 },
  { id: 3, name: 'Pasta', price: 6.75 },
];

export default function MenuPage() {
  return (
    <div>
      <h1>Menu</h1>
      {dummyMenu.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}
