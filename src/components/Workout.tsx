import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

function Workout({ updateForm }) {
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
      <form onSubmit={handleSubmit}>
        <div>
          <label>Exercise</label>
          <input
            type="text"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
          ></input>
        </div>

        <div>
          <label>Sets</label>
          <input
            type="number"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
          ></input>
        </div>

        <div>
          <label>Reps</label>
          <input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          ></input>
        </div>

        <div>
          <label>Weight</label>
          <input
            type="number"
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
