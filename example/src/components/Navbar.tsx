import { Link } from 'parallel-router';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
              Parallel Router
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link to="/features" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Features
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              to="/settings" 
              target="parallel"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              ⚙️ Settings
            </Link>
            <Link 
              to="/user/123" 
              target="parallel"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              👤 Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
