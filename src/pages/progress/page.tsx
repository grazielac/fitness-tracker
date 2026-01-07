import { useState } from "react";
import Tabs from "../../components/Tabs";
import DisplayWorkout from "../../features/workouts/components/DisplayWorkout";

function Progress() {
    const [activeTab, setActiveTab] = useState<"Week" | "Month" | "Year">('Week');

  return (
    <div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
      <DisplayWorkout tab={activeTab} />
    </div>
  );
}

export default Progress;
