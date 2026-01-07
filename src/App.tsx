import { Routes, Route} from "react-router-dom";
import Progress from "./components/Tabs";
import Workout from "./features/workouts/components/WorkoutForm"
import Profile from "./pages/profile/page";

function App() {

  return (
    <>
    <Routes>
      <Route path="/log-workout" element={<Workout />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
    </>
  );
}

export default App;
