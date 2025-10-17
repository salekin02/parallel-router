import { useSearchParams } from 'react-router-dom';

export default function UserProfile() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('parallel')?.split('/').pop() || 'Unknown';

  // Mock user data
  const users: { [key: string]: any } = {
    '123': {
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Senior Developer',
      joined: 'January 2022',
      avatar: '👨‍💻',
    },
    '456': {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Product Manager',
      joined: 'March 2021',
      avatar: '👩‍💼',
    },
    default: {
      name: 'Guest User',
      email: 'guest@example.com',
      role: 'Visitor',
      joined: 'Today',
      avatar: '👤',
    },
  };

  const user = users[userId] || users.default;

  return (
    <div className="parallel-page">
      <h2>User Profile</h2>
      
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>
          {user.avatar}
        </div>
        <h3 style={{ margin: 0, color: '#2c3e50' }}>{user.name}</h3>
        <p style={{ margin: '0.25rem 0', color: '#7f8c8d' }}>User ID: {userId}</p>
      </div>

      <div className="info-section">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Member Since:</strong> {user.joined}</p>
      </div>

      <div className="info-section">
        <h3>Bio</h3>
        <p>
          Passionate about building great products and working with amazing teams.
          Always learning and exploring new technologies.
        </p>
      </div>

      <div className="info-section">
        <h3>Recent Activity</h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li>Completed 5 tasks this week</li>
          <li>Reviewed 12 pull requests</li>
          <li>Contributed to 3 projects</li>
        </ul>
      </div>

      <button className="btn btn-success" style={{ width: '100%', marginTop: '1rem' }}>
        Send Message
      </button>
    </div>
  );
}
