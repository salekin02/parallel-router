import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ParallelRouterProvider, ParallelSidebar } from 'parallel-router';

import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Features } from './pages/Features';
import { UserProfile } from './pages/UserProfile';
import { Settings } from './pages/Settings';
import { ProductDetail } from './pages/ProductDetail';
import './bmc.css';

function App() {
  return (
    <BrowserRouter basename="/parallel-router">
      <ParallelRouterProvider>
        {/* Buy Me a Coffee floating button */}
        <a className="bmc-button" href="https://buymeacoffee.com/salekin02" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee">
          ☕ Buy me a coffee
        </a>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <Navbar />
          
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
            </Routes>
          </main>

          <ParallelSidebar width={500} position="right">
            <Routes>
              <Route path="/user/:id" element={<UserProfile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </ParallelSidebar>
        </div>
      </ParallelRouterProvider>
    </BrowserRouter>
  );
}

export default App;
