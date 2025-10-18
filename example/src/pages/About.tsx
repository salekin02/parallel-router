export function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">About Parallel Router</h1>
        <p className="text-xl text-gray-600">
          A React Router v6 extension that brings parallel routing to your application
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What is it?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Parallel Router extends React Router v6 to enable parallel routing - displaying multiple routes
          simultaneously, one in the main view and another in a sidebar. Perfect for quick views, detail panels,
          settings overlays, and more.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Built with TypeScript, fully typed, and designed to work seamlessly with your existing React Router setup.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Installation</h2>
        <div className="bg-black bg-opacity-30 rounded-md p-4 font-mono text-sm">
          npm install parallel-router react-router-dom
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">📦 Lightweight</h3>
          <p className="text-gray-700">
            Only 46KB unpacked size with zero additional dependencies beyond React and React Router.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">🎯 TypeScript First</h3>
          <p className="text-gray-700">
            Complete type definitions with IntelliSense support for the best developer experience.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">⚡ Auto CSS Injection</h3>
          <p className="text-gray-700">
            No manual CSS imports needed. Styles are automatically injected when you use the package.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">🔗 URL Synced</h3>
          <p className="text-gray-700">
            Parallel routes are reflected in URL search parameters, making them shareable and bookmarkable.
          </p>
        </div>
      </div>
    </div>
  );
}
