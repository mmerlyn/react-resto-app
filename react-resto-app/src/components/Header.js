// Header.js
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/menu" style={{ marginRight: '1rem' }}>Menu</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}
