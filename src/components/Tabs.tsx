import { useState } from "react";

function Tabs() {
  const tabs = ["Week", "Month", "Year"];
  const [activeTab, setActiveTab] = useState("Week");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h1>Progress</h1>
      <p>You're doing amazing!</p>

      <div className="flex justify-center items-center mt-8">
        <div className="relative bg-gray-200 rounded-full py-4 flex justify-center items-center w-full">
          {/* SLIDING PILL */}
          <div
            className="absolute py-7 px-12 rounded-full bg-[#FDDAD8] transition-all duration-300 flex justify-center items-center
          "
            style={{
              width: `calc(50% / ${tabs.length})`,
              transform: `translateX(${tabs.indexOf(activeTab) * 100}%)`,
            }}
          ></div>

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleClick(tab)}
              className="relative cursor-pointer flex-1 z-10 flex items-center justify-center text-gray-700 transition"
              style={{ fontFamily: "CormorantGaramond" }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
