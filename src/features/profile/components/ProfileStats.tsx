function ProfileStats() {
  return (
    <div>
      <div className=" bg-[#FFF1C2] py-4 rounded-3xl">
        <div className="flex justify-evenly items-center">
          <div className="flex flex-col items-center pb-2">
            <p className="text-3xl">24</p>
            <p>Total workouts</p>
          </div>
          <div className="flex flex-col items-center pb-2">
            <p className="text-3xl">18h</p>
            <p>Time trained</p>
          </div>
          <div className="flex flex-col items-center pb-2">
            <p className="text-3xl">7</p>
            <p>Day streak</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileStats;
