import { Link } from 'parallel-router';

export default function Home() {
  return (
    <div className="page">
      <h1>🚀 Welcome to Parallel Router Demo</h1>
      <p>
        This is a live demonstration of the parallel routing system. Click on any
        link below to open a parallel route in a sidebar while staying on this page!
      </p>

      <h2>Try Parallel Routes</h2>
      <p>Click these links to see the parallel routing in action:</p>
      
      <div style={{ marginTop: '1.5rem' }}>
        <Link to="/user/123" target="parallel" className="parallel-link">
          👤 View User Profile
        </Link>
        <Link to="/settings" target="parallel" className="parallel-link secondary">
          ⚙️ Open Settings
        </Link>
        <Link to="/notifications" target="parallel" className="parallel-link success">
          🔔 View Notifications
        </Link>
      </div>

      <h2>Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🔗</div>
          <h3>URL-Based</h3>
          <p>Routes are synced with URL search parameters</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⬅️➡️</div>
          <h3>Browser Navigation</h3>
          <p>Back and forward buttons work naturally</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h3>Customizable</h3>
          <p>Full control over styling and behavior</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⌨️</div>
          <h3>Keyboard Support</h3>
          <p>Press ESC to close the sidebar</p>
        </div>
      </div>

      <h2>How It Works</h2>
      <div className="info-section">
        <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li>Click a parallel link to open a route in the sidebar</li>
          <li>The URL updates with a search parameter (e.g., <code>?parallel=/user/123</code>)</li>
          <li>Both the main page and sidebar are visible simultaneously</li>
          <li>Close the sidebar by pressing ESC, clicking outside, or using the close button</li>
          <li>Navigate normally and parallel routes remain independent</li>
        </ol>
      </div>

      <h2>Quick Stats</h2>
      <div className="stats">
        <div className="stat-item">
          <div className="stat-label">Bundle Size</div>
          <div className="stat-value">~5KB</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Dependencies</div>
          <div className="stat-value">0</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">TypeScript</div>
          <div className="stat-value">100%</div>
        </div>
      </div>
    </div>
  );
}
