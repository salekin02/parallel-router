import { Link } from 'parallel-router';

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </div>
    </nav>
  );
}
