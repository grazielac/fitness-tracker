import { Routes, Route} from "react-router-dom";
import Progress from "./components/Progress";
import Workout from "./features/workouts/components/WorkoutForm"

function App() {

  return (
    <>
    <Routes>
      <Route path="/log-workout" element={<Workout />} />
      <Route path="/progress" element={<Progress />} />

    </Routes>
    </>
  );
}

export default App;
