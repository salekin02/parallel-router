import { Link } from 'parallel-router';

export function Home() {
  const products = [
    { id: 1, name: 'Premium Watch', price: '$299', image: '⌚' },
    { id: 2, name: 'Designer Bag', price: '$499', image: '👜' },
    { id: 3, name: 'Sunglasses', price: '$149', image: '🕶️' },
    { id: 4, name: 'Sneakers', price: '$179', image: '👟' },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">Parallel Router</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience seamless sidebar navigation with React Router v6.
          <br />
          Click any item to see it in action!
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/user/123" 
            target="parallel"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Try Demo
          </Link>
          <Link 
            to="/features"
            className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300 transition"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Products Grid */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              target="parallel"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 cursor-pointer"
            >
              <div className="text-6xl text-center mb-4">{product.image}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-2xl font-bold text-blue-600">{product.price}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                View Details
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Preview */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Parallel Router?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-5xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Fast & Lightweight</h3>
            <p className="text-gray-600">Only 46KB unpacked size</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-3">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Fully Customizable</h3>
            <p className="text-gray-600">Adapt to your design system</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-3">🔗</div>
            <h3 className="text-xl font-semibold mb-2">URL Synced</h3>
            <p className="text-gray-600">Shareable parallel routes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
