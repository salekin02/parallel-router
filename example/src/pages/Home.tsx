import { Link } from 'parallel-router';

export function Home() {
  const products = [
    { id: 1, name: 'Premium Watch', price: '$299', image: '⌚', desc: 'Elegant automatic movement with sapphire crystal.' },
    { id: 2, name: 'Designer Bag', price: '$499', image: '👜', desc: 'Handcrafted leather with spacious interior.' },
    { id: 3, name: 'Sunglasses', price: '$149', image: '🕶️', desc: 'Polarized lenses for clear vision and UV protection.' },
    { id: 4, name: 'Sneakers', price: '$179', image: '👟', desc: 'Cushioned midsole and breathable upper.' },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-14">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-4">
          Welcome to <span className="text-indigo-600">Parallel Router</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-6 max-w-3xl mx-auto">
          Seamlessly open supplementary routes in a sidebar while keeping the main view intact. Great for details, profiles, settings and more.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/user/123" target="parallel" className="btn btn-primary btn-shadow text-lg font-semibold inline-flex items-center gap-3 shadow-lg">
            Try Demo
          </Link>
          <Link to="/features" className="btn btn-ghost btn-shadow text-lg font-medium inline-flex items-center gap-3">
            Learn More
          </Link>
        </div>
      </div>

      {/* Products Grid */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Featured Products</h2>
        <p className="text-sm text-slate-600 mb-4 max-w-2xl">Click any product's card or the button to open details in the sidebar — the main page stays in place so you can compare items quickly.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} target="parallel" className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition p-6 hover:-translate-y-1">
              <div className="h-36 flex items-center justify-center text-6xl mb-4 rounded-md bg-gradient-to-br from-slate-50 to-white">{product.image}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-indigo-600">{product.name}</h3>
              <p className="text-sm text-slate-600 mb-2">{product.desc}</p>
              <p className="text-lg font-bold text-indigo-600">{product.price}</p>
              <div className="mt-4">
                <button aria-label={`Open details for ${product.name} in sidebar`} className="btn-card btn btn-shadow">Open details in sidebar</button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Preview */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Why Parallel Router?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold mb-2">Fast & Lightweight</h3>
            <p className="text-slate-600">Only ~46KB unpacked — keeps your bundles small.</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-lg font-semibold mb-2">Fully Customizable</h3>
            <p className="text-slate-600">Style the sidebar and contents to match your design system.</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl mb-3">🔗</div>
            <h3 className="text-lg font-semibold mb-2">URL Synced</h3>
            <p className="text-slate-600">Parallel routes are shareable and bookmarkable via URL.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
