import { useParams } from 'react-router-dom';

export function UserProfile() {
  const { id } = useParams();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-4xl text-white">
          👤
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">User Profile</h2>
          <p className="text-gray-600">ID: {id}</p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Profile Information</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Username:</span>
            <span className="font-semibold">johndoe</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Email:</span>
            <span className="font-semibold">john@example.com</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Member Since:</span>
            <span className="font-semibold">January 2024</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Status:</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">Active</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <p className="font-medium text-gray-900">Updated profile picture</p>
              <p className="text-sm text-gray-600">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <p className="font-medium text-gray-900">Changed password</p>
              <p className="text-sm text-gray-600">1 day ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <p className="font-medium text-gray-900">Logged in from new device</p>
              <p className="text-sm text-gray-600">3 days ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
