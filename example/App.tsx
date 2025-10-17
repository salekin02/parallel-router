import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {
  ParallelRouterProvider,
  ParallelSidebar,
  ParallelLink,
  useParallelNavigation,
} from '@parallel-router/core';

// Example pages for main routes
function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Home Page</h1>
      <p>Welcome to the Parallel Router demo!</p>
      <div style={{ marginTop: '2rem' }}>
        <h2>Try opening parallel routes:</h2>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <ParallelLink 
            to="/user/123" 
            style={{ 
              padding: '0.5rem 1rem', 
              background: '#007bff', 
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px'
            }}
          >
            View User Profile
          </ParallelLink>
          <ParallelLink 
            to="/settings" 
            style={{ 
              padding: '0.5rem 1rem', 
              background: '#28a745', 
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px'
            }}
          >
            Open Settings
          </ParallelLink>
          <ParallelLink 
            to="/notifications" 
            style={{ 
              padding: '0.5rem 1rem', 
              background: '#ffc107', 
              color: 'black',
              textDecoration: 'none',
              borderRadius: '4px'
            }}
          >
            View Notifications
          </ParallelLink>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>About Page</h1>
      <p>This is a demo of parallel routing with React Router v6.</p>
      <p>You can open sidebars from this page too:</p>
      <ParallelLink to="/user/456">View Another User</ParallelLink>
    </div>
  );
}

function Products() {
  const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Mouse' },
    { id: 3, name: 'Keyboard' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '0.5rem' }}>
            {product.name} -{' '}
            <ParallelLink to={`/product/${product.id}`}>
              View Details
            </ParallelLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Example pages for parallel routes (sidebar)
function UserProfile() {
  const userId = window.location.search.match(/parallel=\/user\/(\d+)/)?.[1];
  
  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {userId}</p>
      <div style={{ marginTop: '1rem' }}>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Role:</strong> Developer</p>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div>
      <h2>Settings</h2>
      <div style={{ marginTop: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '1rem' }}>
          <input type="checkbox" /> Enable notifications
        </label>
        <label style={{ display: 'block', marginBottom: '1rem' }}>
          <input type="checkbox" defaultChecked /> Dark mode
        </label>
        <label style={{ display: 'block', marginBottom: '1rem' }}>
          <input type="checkbox" /> Auto-save
        </label>
        <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Save Settings
        </button>
      </div>
    </div>
  );
}

function Notifications() {
  const notifications = [
    { id: 1, text: 'New message from Alice', time: '2 min ago' },
    { id: 2, text: 'Your post was liked', time: '1 hour ago' },
    { id: 3, text: 'Meeting reminder', time: '3 hours ago' },
  ];

  return (
    <div>
      <h2>Notifications</h2>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
        {notifications.map((notif) => (
          <li 
            key={notif.id} 
            style={{ 
              padding: '1rem', 
              borderBottom: '1px solid #eee',
              marginBottom: '0.5rem'
            }}
          >
            <div>{notif.text}</div>
            <small style={{ color: '#666' }}>{notif.time}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductDetail() {
  const productId = window.location.search.match(/parallel=\/product\/(\d+)/)?.[1];
  
  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {productId}</p>
      <div style={{ marginTop: '1rem' }}>
        <p><strong>Price:</strong> $299</p>
        <p><strong>In Stock:</strong> Yes</p>
        <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐</p>
        <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

// Navigation component
function Navigation() {
  const { isParallelOpen, closeParallel } = useParallelNavigation();

  return (
    <nav style={{ 
      background: '#333', 
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Home
        </Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
          About
        </Link>
        <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>
          Products
        </Link>
      </div>
      {isParallelOpen && (
        <button 
          onClick={closeParallel}
          style={{ 
            padding: '0.5rem 1rem',
            background: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Close Sidebar
        </button>
      )}
    </nav>
  );
}

// Main App component
function App() {
  return (
    <BrowserRouter>
      <ParallelRouterProvider>
        <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
          <Navigation />
          
          {/* Main routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
          </Routes>

          {/* Parallel routes in sidebar */}
          <ParallelSidebar
            routes={[
              { path: '/user/:id', element: <UserProfile /> },
              { path: '/settings', element: <Settings /> },
              { path: '/notifications', element: <Notifications /> },
              { path: '/product/:id', element: <ProductDetail /> },
            ]}
            width={450}
            position="right"
          />
        </div>
      </ParallelRouterProvider>
    </BrowserRouter>
  );
}

export default App;
