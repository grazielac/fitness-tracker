
function Home() {

  const today = new Intl.DateTimeFormat("en-UK", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());


  return (
    <div>
      <div className="flex flex-col">
        <p style={{ fontFamily: "Montserrat, sans-serif" }} className="text-md">
          {today}
        </p>
        <h1 className="text-lg leading-tighter">Good morning</h1>
      </div>

      {/* TODAY'S WORKOUT */}
      <div className="bg-[#FFDEDE] p-6 rounded-3xl mt-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-red-500">TODAY'S WORKOUT</p>
          <h2>Upper Body</h2>
          <div className="flex gap-4">
            <p style={{ fontFamily: "Montserrat, sans-serif" }}>45 min</p>
            <span>/</span>
            <p style={{ fontFamily: "Montserrat, sans-serif" }}>6 exercises</p>
          </div>
        </div>
        <div className="mt-4">
          <button className="py-2 px-6 rounded-full bg-[#FBF7F6] shadow-sm">
            Start workout
          </button>
        </div>
      </div>

      {/* LAST WORKOUT */}
      <div className="mt-8">
        <div className="flex justify-between mb-4">
          <h5
            className="text-[#927C76]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Last Workout
          </h5>
          <button className="text-sm text-[#927C76]">View all</button>
        </div>
        <div className="border border-gray-300 p-6 rounded-2xl">
          <div className="flex justify-between">
            <h2>Lower Body</h2>
            <div className="bg-[#849159] py-1 px-4 rounded-2xl">
              <p className="text-white">PR</p>
            </div>
          </div>
          <div className="flex gap-4">
            <p style={{ fontFamily: "Montserrat, sans-serif" }}>45 min</p>
            <span>/</span>
            <p style={{ fontFamily: "Montserrat, sans-serif" }}>6 exercises</p>
          </div>
          <div className="mt-2">
            <p className="text-md">Squats, Lunges, Deadlifts +4 more</p>
          </div>
        </div>
      </div>

      {/* THIS WEEK  */}
      <div className="mt-10">
        <div className="flex justify-between mb-4">
          <h5
            className="text-[#927C76]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            This week
          </h5>
        </div>

        <div className="flex justify-around items-center gap-2">
          <div className="flex flex-col items-center border border-gray-300 py-5 px-6 rounded-3xl">
            <p className="text-3xl">3</p>
            <p>workouts</p>
          </div>
          <div className="flex flex-col items-center border border-gray-300 py-5 px-6 rounded-3xl">
            <p className="text-3xl">2h 45m</p>
            <p>total time</p>
          </div>
          <div className="flex flex-col items-center border border-gray-300 py-5 px-6 rounded-3xl">
            <p className="text-3xl">7</p>
            <p>day streak</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
