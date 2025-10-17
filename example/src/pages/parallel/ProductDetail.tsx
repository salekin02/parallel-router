import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export default function ProductDetail() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('parallel')?.split('/').pop() || '1';
  const [quantity, setQuantity] = useState(1);

  const products: { [key: string]: any } = {
    '1': {
      name: 'MacBook Pro M3',
      price: '$2,499',
      description: 'The most powerful MacBook Pro ever with M3 chip.',
      image: '💻',
      specs: [
        'Apple M3 Pro chip',
        '16GB unified memory',
        '512GB SSD storage',
        '14-inch Liquid Retina XDR display',
        'Up to 18 hours battery life',
      ],
      inStock: true,
      rating: 4.8,
    },
    '2': {
      name: 'Magic Mouse',
      price: '$79',
      description: 'Wireless, rechargeable, and incredibly versatile.',
      image: '🖱️',
      specs: [
        'Wireless connectivity',
        'Rechargeable battery',
        'Multi-touch surface',
        'Lightning charging port',
      ],
      inStock: true,
      rating: 4.2,
    },
    '3': {
      name: 'Mechanical Keyboard',
      price: '$149',
      description: 'Premium mechanical switches with RGB lighting.',
      image: '⌨️',
      specs: [
        'Cherry MX switches',
        'RGB per-key lighting',
        'Aluminum frame',
        'USB-C connectivity',
        'Hot-swappable switches',
      ],
      inStock: true,
      rating: 4.7,
    },
    '999': {
      name: 'Premium Headphones',
      price: '$349',
      description: 'Active noise cancellation with premium sound quality.',
      image: '🎧',
      specs: [
        'Active Noise Cancellation',
        '30-hour battery life',
        'Premium leather ear cups',
        'Bluetooth 5.0',
        'Hi-Res audio certified',
      ],
      inStock: true,
      rating: 4.9,
    },
  };

  const product = products[productId] || products['1'];

  const handleAddToCart = () => {
    alert(`Added ${quantity} × ${product.name} to cart!`);
  };

  return (
    <div className="parallel-page">
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '5rem', marginBottom: '0.5rem' }}>
          {product.image}
        </div>
        <h2 style={{ marginBottom: '0.25rem' }}>{product.name}</h2>
        <div style={{ 
          fontSize: '1.5rem', 
          color: '#27ae60', 
          fontWeight: 'bold',
          marginBottom: '0.5rem'
        }}>
          {product.price}
        </div>
        <div style={{ color: '#7f8c8d' }}>
          ⭐ {product.rating} / 5.0
        </div>
      </div>

      <div className="info-section">
        <h3>Description</h3>
        <p>{product.description}</p>
      </div>

      <div className="info-section">
        <h3>Specifications</h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          {product.specs.map((spec: string, index: number) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>

      <div className="info-section">
        <h3>Availability</h3>
        <p>
          <span style={{ 
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            background: product.inStock ? '#d4edda' : '#f8d7da',
            color: product.inStock ? '#155724' : '#721c24',
            borderRadius: '4px',
            fontSize: '0.85rem',
            fontWeight: 'bold'
          }}>
            {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
          </span>
        </p>
      </div>

      <div className="info-section">
        <h3>Quantity</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            className="btn"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            style={{ padding: '0.5rem 1rem' }}
          >
            -
          </button>
          <span style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold',
            minWidth: '2rem',
            textAlign: 'center'
          }}>
            {quantity}
          </span>
          <button 
            className="btn"
            onClick={() => setQuantity(Math.min(10, quantity + 1))}
            style={{ padding: '0.5rem 1rem' }}
          >
            +
          </button>
        </div>
      </div>

      <button 
        className="btn btn-success" 
        style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}
        onClick={handleAddToCart}
        disabled={!product.inStock}
      >
        {product.inStock ? '🛒 Add to Cart' : 'Out of Stock'}
      </button>

      <p style={{ 
        marginTop: '1rem', 
        fontSize: '0.85rem', 
        color: '#7f8c8d',
        textAlign: 'center'
      }}>
        💡 Free shipping on orders over $100
      </p>
    </div>
  );
}
