import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ParallelRouterProvider,
  ParallelSidebar,
} from 'parallel-router';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import UserProfile from './pages/parallel/UserProfile';
import Settings from './pages/parallel/Settings';
import Notifications from './pages/parallel/Notifications';
import ProductDetail from './pages/parallel/ProductDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ParallelRouterProvider>
        <div className="app">
          <Navigation />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/user/:id" element={<UserProfile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </main>

          {/* ParallelSidebar will automatically use the same routes */}
          <ParallelSidebar width={500} position="right">
            <Routes>
              <Route path="/user/:id" element={<UserProfile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </ParallelSidebar>
        </div>
      </ParallelRouterProvider>
    </BrowserRouter>
  );
}

export default App;
