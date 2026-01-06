import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

type WorkoutProps = {
  updateForm: () => void;
};

function Workout({ updateForm }: WorkoutProps) {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // prevent reload

    // convert to numbers
    const setsNum = Number(sets);
    const repsNum = Number(reps);
    const weightNum = Number(weight);

    // validation
    if (!exercise || !reps || !sets || weight === "") {
      setError("Please fill in all required fields");
      return;
    }

    if (setsNum <= 0 || repsNum <= 0) {
      setError("Reps and sets must be greater than 0");
      return;
    }

    if (weightNum < 0) {
      setError("Weight cannot be negative");
      return;
    }

    setError(null);

    // read state value
    const data = {
      exercise,
      sets: setsNum,
      reps: repsNum,
      weight: weightNum,
      notes,
    };

    const { error } = await supabase // send data to supabase
      .from("workout")
      .insert([data]);

    if (error) {
      console.error(error);
      setError("Failed to add workout");
      return;
    }

    // reset form
    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
    setNotes("");

    updateForm(); // trigger refresh
  }

  return (
    <div>
      <h1>Log Workout</h1>
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-200">
          <div>
            <input
              type="text"
              className="border-b outline-none"
              placeholder="Workout name"
            ></input>
          </div>

          <input
            className="border-none outline-none"
            placeholder="Exercise name"
            type="text"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
          ></input>
        </div>

        <div className="space-y-2 bg-gray ">
          <label>Sets</label>
          <input
            type="number"
            value={sets}
            placeholder="0"
            className="border-b border-gray-300 focus:border-black outline-none px-2 w-full"
            onChange={(e) => setSets(e.target.value)}
          ></input>

          <span className="text-xs text-gray-400">Reps</span>
          <input
            type="number"
            placeholder="0"
            className="border-none outline-none"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          ></input>
        </div>

        <div>
          <label>Weight</label>
          <input
            type="number"
            placeholder="0"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          ></input>
        </div>

        <div>
          <label>Notes</label>
          <input
            type="text"
            value={notes}
            placeholder="Optional"
            onChange={(e) => {
              setNotes(e.target.value);
            }}
          ></input>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Add workout</button>
      </form>
    </div>
  );
}

export default Workout;
