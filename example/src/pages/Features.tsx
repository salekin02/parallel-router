export function Features() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Features</h1>
        <p className="text-xl text-gray-600">
          Everything you need for parallel routing in React
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">🔗 Single Link Component</h2>
          <p className="text-gray-700 mb-4">
            Use one Link component for both regular and parallel navigation. Simply add{' '}
            <code className="bg-gray-100 px-2 py-1 rounded">target="parallel"</code> to open routes in the sidebar.
          </p>
          <div className="bg-gray-50 rounded-md p-4 font-mono text-sm">
            <div className="text-green-600">{'// Regular navigation'}</div>
            <div>{'<Link to="/about">About</Link>'}</div>
            <div className="mt-2 text-green-600">{'// Parallel navigation'}</div>
            <div>{'<Link to="/profile" target="parallel">Profile</Link>'}</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-purple-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">📱 Smooth Animations</h2>
          <p className="text-gray-700 mb-4">
            Beautiful slide-in/out transitions inspired by popular UI libraries. Sidebar smoothly appears from left or right with backdrop overlay.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">⌨️ Keyboard Support</h2>
          <p className="text-gray-700 mb-4">
            Full keyboard accessibility with ESC key to close sidebar. Works seamlessly with screen readers.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-orange-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">🎨 Fully Customizable</h2>
          <p className="text-gray-700 mb-4">
            Override styles with custom CSS classes. Control width, position (left/right), overlay behavior, and more.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">🎯 Flexible Routes</h2>
          <p className="text-gray-700 mb-4">
            Multiple ways to define routes: JSX, arrays, or reuse existing route configurations. Choose what works best for your project.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-6">Install parallel-router and start building better UX today!</p>
        <a 
          href="https://www.npmjs.com/package/parallel-router" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          View on NPM
        </a>
      </div>
    </div>
  );
}
