import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

type Workout = {
  id: string;
  exercise: string;
  sets: number;
  reps: number;
  weight: number;
  notes: string | null;
  date: string;
};

type DisplayWorkoutProps = {
  refreshCounter: number;
};


function DisplayWorkout({ refreshCounter }: DisplayWorkoutProps) {
  const [workout, setWorkout] = useState<Workout | null>(null); // state to store the last workout
  const [history, setHistory] = useState<Workout[]>([]); // holds the last 5 workouts
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

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
  }, [refreshCounter]); // run on first render and whenever refreshCounter changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading </p>;

  return (
    <div>
      <h3>Last Workout</h3>

      {!workout ? (
        <p>No workouts yet</p>
      ) : (
        <div>
          <p>Exercise: {workout.exercise}</p>
          <p>Sets: {workout.sets}</p>
          <p>Reps: {workout.reps}</p>
          <p>Weight: {workout.weight} kg</p>
          <p>Notes: {workout.notes}</p>
          <p>Date: {new Date(workout.date).toLocaleDateString()}</p>
        </div>
      )}

      <h3>Recent Workouts</h3>

      {history.length === 0 ? (
        <p>No workout history yet</p>
      ) : (
        <ul>
          {history.map((w) => (
            <li key={w.id}>
              {w.exercise} — {w.sets} × {w.reps} @ {w.weight}kg
            </li>
          ))} 
        </ul>
      )}
    </div>
  );
}

export default DisplayWorkout;
