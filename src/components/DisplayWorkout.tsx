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

function DisplayWorkout({ refreshCounter }) {
  const [workout, setWorkout] = useState<Workout | null>(null); // state to store the last workout
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkout = async () => {
      const { data, error } = await supabase
        .from("workout") // most recently logged workout
        .select("*")
        .order("date", { ascending: false })
        .limit(1);
      // .single();

      if (error) {
        setError(error.message);
      } else if (data && data.length === 0) {
        setWorkout(null); // no workouts yet
      } else {
        setWorkout(data![0]); // store it in react state
      }
      setLoading(false);
    };
    fetchWorkout();
  }, [refreshCounter]); // runs only on the first render

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading </p>;
  if (!workout) return <p>No workouts yet</p>;

  return (
    <div>
      <div>
        <h3>Last Workout</h3>
        <p>Exercise: {workout.exercise}</p>
        <p>Sets: {workout.sets}</p>
        <p>Reps: {workout.reps}</p>
        <p>Weight: {workout.weight} kg</p>
        <p>Notes: {workout.notes}</p>
        <p>Date: {new Date(workout.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default DisplayWorkout;
