export function Settings() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Settings</h2>
        <p className="text-gray-600">Manage your preferences</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Appearance</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Dark Mode</span>
              <label className="relative inline-block w-12 h-6">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-12 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full peer transition"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-6 transition"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Compact View</span>
              <label className="relative inline-block w-12 h-6">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-12 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full peer transition"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-6 transition"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Notifications</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Email Notifications</span>
              <label className="relative inline-block w-12 h-6">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-12 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full peer transition"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-6 transition"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Push Notifications</span>
              <label className="relative inline-block w-12 h-6">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-12 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full peer transition"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-6 transition"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Privacy</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Public Profile</span>
              <label className="relative inline-block w-12 h-6">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-12 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full peer transition"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-6 transition"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Show Activity</span>
              <label className="relative inline-block w-12 h-6">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-12 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full peer transition"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-6 transition"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 space-y-3">
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Save Changes
        </button>
        <button className="w-full bg-red-50 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-100 transition">
          Delete Account
        </button>
      </div>
    </div>
  );
}
