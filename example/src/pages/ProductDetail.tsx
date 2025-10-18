import { useParams } from 'react-router-dom';

export function ProductDetail() {
  const { id } = useParams();

  const products: Record<string, { name: string; price: string; image: string; description: string; features: string[] }> = {
    '1': {
      name: 'Premium Watch',
      price: '$299',
      image: '⌚',
      description: 'Elegant timepiece with precision movement and premium materials.',
      features: ['Water resistant', 'Sapphire crystal', 'Automatic movement', '2-year warranty']
    },
    '2': {
      name: 'Designer Bag',
      price: '$499',
      image: '👜',
      description: 'Luxury handbag crafted from finest leather with attention to detail.',
      features: ['Genuine leather', 'Multiple compartments', 'Adjustable strap', 'Limited edition']
    },
    '3': {
      name: 'Sunglasses',
      price: '$149',
      image: '🕶️',
      description: 'Stylish sunglasses with UV protection and polarized lenses.',
      features: ['UV400 protection', 'Polarized lenses', 'Lightweight frame', 'Includes case']
    },
    '4': {
      name: 'Sneakers',
      price: '$179',
      image: '👟',
      description: 'Comfortable and stylish sneakers for everyday wear.',
      features: ['Breathable material', 'Cushioned sole', 'Durable construction', 'Multiple colors']
    }
  };

  const product = products[id || '1'];

  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <div className="text-8xl mb-4">{product.image}</div>
        <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
        <p className="text-4xl font-bold text-blue-600 mt-2">{product.price}</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
        <p className="text-gray-700">{product.description}</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-2xl">🚚</span>
          <h3 className="text-lg font-semibold text-gray-900">Shipping</h3>
        </div>
        <p className="text-gray-700">Free shipping on orders over $100</p>
        <p className="text-sm text-gray-600 mt-1">Estimated delivery: 3-5 business days</p>
      </div>

      <div className="space-y-3">
        <button className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          Add to Cart
        </button>
        <button className="w-full bg-gray-100 text-gray-800 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition">
          Add to Wishlist ♥
        </button>
      </div>
    </div>
  );
}
