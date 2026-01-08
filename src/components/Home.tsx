import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Link } from "react-router-dom";

const morning = [
  "Good morning, pretty",
  "A new day, a fresh start",
  "Hello sunshine ☀️ your body will thank you",
];
const noon = [
  "Midday reminder: progress > perfection",
  "Checking in on you, you’ve got this",
  "Hey love, how’s your energy today? 💭",
];
const night = [
  "You did enough today 🤍 rest well",
  "Slow down, breathe, and be proud 🌙",
  "Logging off now — you earned your rest",
];

type Workout = {
  id: string;
  exercise: string;
  sets: number;
  reps: number;
  weight: number;
  notes: string | null;
  date: string;
};

function Home() {
  const [greeting, setGreeting] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [workout, setWorkout] = useState<Workout | null>(null); // state to store the last workout
  const [history, setHistory] = useState<Workout[]>([]);

  const today = new Intl.DateTimeFormat("en-UK", {
    weekday: "short",
    month: "long",
    day: "numeric",
  }).format(new Date());

  const handleClick = () => {
    
  }

  // RANDOM GREETING
  useEffect(() => {
    const getRandom = (arr: string[]) =>
      arr[Math.floor(Math.random() * arr.length)];
    // CURRENT HOUR
    const date = new Date();
    const currentHour = date.getHours();

    if (currentHour >= 5 && currentHour <= 11) {
      setGreeting(getRandom(morning));
    } else if (currentHour >= 12 && currentHour <= 18) {
      setGreeting(getRandom(noon));
    } else {
      setGreeting(getRandom(night));
    }
  }, []);

  useEffect(() => {
    const fetchWorkout = async () => {
      setLoading(true);

      // fetch last workout
      const { data: lastWorkout, error: lastError } = await supabase
        .from("workout") // most recently logged workout | fetching only 1 workout
        .select("*")
        .order("date", { ascending: false })
        .limit(1);

      if (lastError) {
        setError(lastError.message);
        setLoading(false);
        return;
      }

      setWorkout(lastWorkout && lastWorkout.length > 0 ? lastWorkout[0] : null);

      // fetch last 5 workouts
      const { data: recentWorkout, error: historyError } = await supabase
        .from("workout") // most recently logged workout | fetching only 1 workout
        .select("*")
        .order("date", { ascending: false })
        .limit(5);

      if (historyError) {
        setError(historyError.message);
      } else {
        setHistory(recentWorkout || []);
      }

      setLoading(false);
    };

    fetchWorkout();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="flex flex-col">
        <p
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="text-md pb-2"
        >
          {today}
        </p>
        <h1 className="block leading-none">{greeting}</h1>
      </div>

      {/* TODAY'S WORKOUT */}
      <div className="bg-[#FAF4D4] p-6 rounded-3xl mt-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-[#E98C8C]">TODAY'S WORKOUT</p>
          <h2>Upper Body</h2>
          <div className="flex gap-4">
            <p className="text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>45 min</p>
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
          <h6
            className="text-[#927C76] "
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Last Workout
          </h6>
          <button className="text-sm text-[#927C76]">View all</button>
        </div>

        {/* START HERE DISPLAY */}
        <Link to="/progress">
          <div className="border rounded-2xl p-6 border-[#e5ddd5]">
            {!workout ? (
              <p>No workouts yet</p>
            ) : (
              <div>
                <div className="flex justify-between">
                  <h2>{workout.exercise}</h2>
                  <div className="bg-[#a8c5a3] py-1 px-4 rounded-2xl">
                    <p className="text-white">PR</p>
                  </div>
                </div>
                <p
                  className="text-xs"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {today}
                </p>
                <div className="mt-2">
                  <p className="text-md">Squats, Lunges, Deadlifts +4 more</p>
                </div>
              </div>
            )}
          </div>
        </Link>
      </div>

      {/* THIS WEEK  */}
      <div className="mt-10">
        <div className="flex justify-between mb-4">
          <h6
            className="text-[#927C76] text-sm"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            This week
          </h6>
        </div>

        <div className="flex justify-around items-center gap-2">
          <div className="flex flex-col items-center border border-[#e5ddd5] py-5 px-6 rounded-3xl">
            <p className="text-3xl">3</p>
            <p>workouts</p>
          </div>
          <div className="flex flex-col items-center border border-[#e5ddd5] py-5 px-6 rounded-3xl">
            <p className="text-3xl">2h 45m</p>
            <p>total time</p>
          </div>
          <div className="flex flex-col items-center border border-[#e5ddd5] py-5 px-6 rounded-3xl">
            <p className="text-3xl">7</p>
            <p>day streak</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
