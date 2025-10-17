import { ParallelLink } from 'parallel-router';

const products = [
  {
    id: 1,
    name: 'MacBook Pro M3',
    description: 'Powerful laptop for developers',
    price: '$2,499',
    category: 'Laptops',
  },
  {
    id: 2,
    name: 'Magic Mouse',
    description: 'Wireless rechargeable mouse',
    price: '$79',
    category: 'Accessories',
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    description: 'RGB backlit gaming keyboard',
    price: '$149',
    category: 'Keyboards',
  },
  {
    id: 4,
    name: '4K Monitor',
    description: '27-inch professional display',
    price: '$699',
    category: 'Monitors',
  },
  {
    id: 5,
    name: 'Webcam HD Pro',
    description: '1080p streaming camera',
    price: '$129',
    category: 'Accessories',
  },
  {
    id: 6,
    name: 'USB-C Hub',
    description: '7-in-1 multiport adapter',
    price: '$49',
    category: 'Accessories',
  },
];

export default function Products() {
  return (
    <div className="page">
      <h1>Products Catalog</h1>
      <p>
        Browse our products. Click on any product to view its details in a sidebar
        while keeping the catalog visible.
      </p>

      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p style={{ color: '#27ae60', fontWeight: 'bold' }}>
                {product.price} • {product.category}
              </p>
            </div>
            <ParallelLink 
              to={`/product/${product.id}`} 
              className="parallel-link"
            >
              View Details →
            </ParallelLink>
          </li>
        ))}
      </ul>

      <div className="info-section" style={{ marginTop: '2rem' }}>
        <h3>💡 Try This:</h3>
        <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li>Click "View Details" on any product</li>
          <li>The product details will open in a sidebar</li>
          <li>You can still see the product list</li>
          <li>Click on another product to switch the sidebar content</li>
          <li>Close the sidebar and the catalog is still here!</li>
        </ol>
      </div>
    </div>
  );
}
