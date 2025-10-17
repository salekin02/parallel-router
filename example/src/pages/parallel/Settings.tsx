import { useState } from 'react';

export default function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    emailUpdates: false,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="parallel-page">
      <h2>⚙️ Settings</h2>
      <p style={{ color: '#7f8c8d', marginBottom: '1.5rem' }}>
        Manage your application preferences
      </p>

      <div className="info-section">
        <h3>Notifications</h3>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={() => handleToggle('notifications')}
          />
          <span>Enable push notifications</span>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', marginTop: '0.75rem' }}>
          <input
            type="checkbox"
            checked={settings.emailUpdates}
            onChange={() => handleToggle('emailUpdates')}
          />
          <span>Receive email updates</span>
        </label>
      </div>

      <div className="info-section">
        <h3>Appearance</h3>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={settings.darkMode}
            onChange={() => handleToggle('darkMode')}
          />
          <span>Dark mode</span>
        </label>
      </div>

      <div className="info-section">
        <h3>Preferences</h3>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={settings.autoSave}
            onChange={() => handleToggle('autoSave')}
          />
          <span>Auto-save changes</span>
        </label>
      </div>

      <div className="info-section">
        <h3>Current Settings</h3>
        <pre style={{ 
          background: '#2c3e50', 
          color: '#ecf0f1', 
          padding: '1rem', 
          borderRadius: '4px',
          fontSize: '0.85rem',
          overflow: 'auto'
        }}>
          {JSON.stringify(settings, null, 2)}
        </pre>
      </div>

      <button 
        className="btn" 
        style={{ width: '100%', marginTop: '1rem' }}
        onClick={handleSave}
      >
        Save Settings
      </button>

      <p style={{ 
        marginTop: '1rem', 
        fontSize: '0.85rem', 
        color: '#7f8c8d',
        textAlign: 'center'
      }}>
        💡 Changes are saved automatically when you close this sidebar
      </p>
    </div>
  );
}
