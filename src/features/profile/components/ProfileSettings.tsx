
function ProfileSettings() {
  return (
    <div>
      <div className="mt-8">
            <h2>Settings</h2>
            <div className="flex flex-col gap-2 mt-4">
              <button className="flex justify-between items-center w-full border border-gray-300 rounded-2xl py-4">
                <p className="pl-6 text-xl">Workout preferences</p>
                <span className="text-gray-500 pr-6 text-xl">→</span>
              </button>
              <button className="flex justify-between items-center w-full border border-gray-300 rounded-2xl py-4">
                <p className="pl-6 text-xl">Reminders</p>
                <span className="text-gray-500 pr-6 text-xl">→</span>
              </button>
              <button className="flex justify-between items-center w-full border border-gray-300 rounded-2xl py-4">
                <p className="pl-6 text-xl">Units & measurements</p>
                <span className="text-gray-500 pr-6 text-xl">→</span>
              </button>
              <button className="flex justify-between items-center w-full border border-gray-300 rounded-2xl py-4">
                <p className="pl-6 text-xl">Export data</p>
                <span className="text-gray-500 pr-6 text-xl">→</span>
              </button>
            </div>
          </div>
    </div>
  )
}

export default ProfileSettings
