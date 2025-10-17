import { useState } from 'react';

interface Notification {
  id: number;
  text: string;
  time: string;
  unread: boolean;
  type: 'info' | 'success' | 'warning';
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    { 
      id: 1, 
      text: 'New message from Alice', 
      time: '2 minutes ago', 
      unread: true,
      type: 'info'
    },
    { 
      id: 2, 
      text: 'Your deployment was successful', 
      time: '15 minutes ago', 
      unread: true,
      type: 'success'
    },
    { 
      id: 3, 
      text: 'Server maintenance scheduled', 
      time: '1 hour ago', 
      unread: false,
      type: 'warning'
    },
    { 
      id: 4, 
      text: 'Bob commented on your post', 
      time: '2 hours ago', 
      unread: false,
      type: 'info'
    },
    { 
      id: 5, 
      text: 'Meeting reminder: Team sync at 3 PM', 
      time: '3 hours ago', 
      unread: false,
      type: 'info'
    },
  ]);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, unread: false } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, unread: false }))
    );
  };

  const unreadCount = notifications.filter((n) => n.unread).length;

  const getEmojiForType = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return '✅';
      case 'warning':
        return '⚠️';
      default:
        return '💬';
    }
  };

  return (
    <div className="parallel-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2>🔔 Notifications</h2>
        {unreadCount > 0 && (
          <span style={{
            background: '#e74c3c',
            color: 'white',
            padding: '0.25rem 0.75rem',
            borderRadius: '12px',
            fontSize: '0.85rem',
            fontWeight: 'bold'
          }}>
            {unreadCount} new
          </span>
        )}
      </div>

      {unreadCount > 0 && (
        <button 
          className="btn" 
          style={{ width: '100%', marginBottom: '1rem' }}
          onClick={markAllAsRead}
        >
          Mark All as Read
        </button>
      )}

      <ul className="notification-list">
        {notifications.map((notif) => (
          <li
            key={notif.id}
            className={`notification-item ${notif.unread ? 'unread' : ''}`}
            onClick={() => markAsRead(notif.id)}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.5rem' }}>
                {getEmojiForType(notif.type)}
              </span>
              <div style={{ flex: 1 }}>
                <div className="notification-text">{notif.text}</div>
                <div className="notification-time">{notif.time}</div>
              </div>
              {notif.unread && (
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#e74c3c',
                  marginTop: '0.5rem'
                }} />
              )}
            </div>
          </li>
        ))}
      </ul>

      {notifications.length === 0 && (
        <div className="info-section" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📭</p>
          <p>No notifications yet</p>
        </div>
      )}

      <div className="info-section" style={{ marginTop: '1.5rem' }}>
        <p style={{ fontSize: '0.85rem', color: '#7f8c8d', margin: 0 }}>
          💡 Click on any notification to mark it as read
        </p>
      </div>
    </div>
  );
}
