import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

// type WorkoutProps = {
//   updateForm: () => void;
// };

function Workout() {
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

    // updateForm(); // trigger refresh
  }

  return (
    <div className="pb-4 flex-1 overflow-y-auto">
      <div className="mb-8">
        <p>← Back</p>
      </div>
      <h1>Log Workout</h1>
      <form onSubmit={handleSubmit}>
        <div className="pt-5 pb-4">
          <input type="text" placeholder="Workout name"></input>
        </div>

        <div>
          <hr className=" border-gray-300"></hr>
        </div>

        <div className="pt-5 flex justify-between pb-2">
          <input
            placeholder="Exercise name"
            type="text"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
          ></input>
          <button>Remove</button>
        </div>

        <div className="flex justify-around">
          <div className="flex flex-col items-center text-center p-2">
            <label>Set</label>
            <input
              className="border rounded-4xl border-gray-300 text-center px-2 py-1 w-20"
              type="number"
              value={sets}
              placeholder="0"
              onChange={(e) => setSets(e.target.value)}
            ></input>
          </div>

          <div className="flex flex-col items-center text-center p-2">
            <label className="text-xs">Reps</label>
            <input
              type="number"
              placeholder="0"
              className="border rounded-4xl border-gray-300 text-center px-2 py-1 w-20"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            ></input>
          </div>

          <div className="flex flex-col items-center text-center p-2">
            <label>Weight</label>
            <input
              className="border rounded-4xl border-gray-300 text-center px-2 py-1 w-20"
              type="number"
              placeholder="0"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="flex justify-center items-center text-center mt-4">
          <button>+ Add set</button>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="border rounded-4xl mt-10 px-2 py-2 text-center border-gray-300">
          <button type="submit">+ Add workout</button>
        </div>

        <div className="flex flex-col items-center text-center mt-4 px-4 py-3 text-sm resize-none h-24 ">
          <label>Notes</label>
          <textarea
            className="w-full border rounded-4xl border-gray-300 text-center"
            value={notes}
            placeholder="How did it feel? Any notes..."
            onChange={(e) => {
              setNotes(e.target.value);
            }}
          ></textarea>
        </div>

        <div className="bg-[#FFF1C2] p-6 border rounded-full mt-10 mb-10 px-2 py-3 text-center  border-gray-300">
          <button type="submit" className="w-full py-3.5">
            Save workout
          </button>
        </div>
      </form>
    </div>
  );
}

export default Workout;
