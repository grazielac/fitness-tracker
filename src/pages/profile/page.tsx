function Profile() {
  return (
    <div>
      <h1>Profile</h1>

      <div className="mt-10">
        {/* AVATAR */}
        <div className="w-full mb-12">
          <div className="flex items-center gap-4 mb-6 ">
            <div className="w-20 h-20 rounded-full bg-[#C4B6A7]"></div>
            <div className="flex flex-col">
              <p className="font-medium text-gray-800 text-xl">
                Graziela Caringal
              </p>
              <p className="font-medium text-gray-400 text-xl">
                Member since Jan 2026
              </p>
            </div>
          </div>
        </div>

        {/* TOTAL */}
        <div className=" bg-[#FFF1C2] py-4 rounded-3xl">
          <div className="flex justify-evenly items-center">
            <div className="flex flex-col items-center pb-2">
              <p className="text-3xl">24</p>
              <p>Total workouts</p>
            </div>
            <div className="flex flex-col items-center pb-2">
              <p className="text-3xl">18h</p>
              <p>Time trained</p>
            </div>
            <div className="flex flex-col items-center pb-2">
              <p className="text-3xl">7</p>
              <p>Day streak</p>
            </div>
          </div>
        </div>

        {/* SETTINGS */}
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
    </div>
  );
}

export default Profile;
