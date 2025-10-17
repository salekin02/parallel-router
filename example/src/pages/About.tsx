import { ParallelLink } from 'parallel-router';

export default function About() {
  return (
    <div className="page">
      <h1>About Parallel Router</h1>
      <p>
        Parallel Router is a React Router v6 extension that enables parallel routing
        with sidebar navigation. It allows you to display multiple routes simultaneously -
        one in the main view and another in a sidebar.
      </p>

      <h2>Why Parallel Routes?</h2>
      <p>
        Traditional routing replaces the entire page when navigating. Parallel routing
        lets you view related content side-by-side without losing context of your
        current page.
      </p>

      <div className="cards-grid">
        <div className="card">
          <h3>💼 User Profiles</h3>
          <p>
            View user profiles in a sidebar without leaving your current page.
          </p>
          <ParallelLink to="/user/456" className="parallel-link">
            View Example Profile
          </ParallelLink>
        </div>

        <div className="card">
          <h3>🛍️ Product Details</h3>
          <p>
            Browse products while viewing details in a sidebar.
          </p>
          <ParallelLink to="/product/999" className="parallel-link secondary">
            View Product Details
          </ParallelLink>
        </div>

        <div className="card">
          <h3>⚙️ Quick Settings</h3>
          <p>
            Access settings without interrupting your workflow.
          </p>
          <ParallelLink to="/settings" className="parallel-link success">
            Open Settings
          </ParallelLink>
        </div>
      </div>

      <h2>Key Benefits</h2>
      <div className="info-section">
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li><strong>Context Preservation:</strong> Stay on your current page while viewing related content</li>
          <li><strong>URL Shareable:</strong> Parallel routes are in the URL, so you can share them</li>
          <li><strong>Native Navigation:</strong> Browser back/forward buttons work perfectly</li>
          <li><strong>Keyboard Friendly:</strong> ESC key closes the sidebar</li>
          <li><strong>Mobile Responsive:</strong> Works on all screen sizes</li>
          <li><strong>TypeScript Support:</strong> Fully typed for better developer experience</li>
        </ul>
      </div>

      <h2>Use Cases</h2>
      <p>Perfect for:</p>
      <div className="cards-grid" style={{ marginTop: '1rem' }}>
        <div className="card">
          <h3>📊 Dashboards</h3>
          <p>View detailed metrics without leaving the dashboard</p>
        </div>
        <div className="card">
          <h3>📧 Email Clients</h3>
          <p>Read emails in a sidebar while keeping the inbox visible</p>
        </div>
        <div className="card">
          <h3>🛒 E-commerce</h3>
          <p>Browse products and view details simultaneously</p>
        </div>
        <div className="card">
          <h3>📝 Documentation</h3>
          <p>Show help docs alongside your main content</p>
        </div>
      </div>
    </div>
  );
}
