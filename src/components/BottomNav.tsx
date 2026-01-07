import { CiHome } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { TbProgress } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function BottomNav() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#C4B6A7] w-full py-2 fixed left-0 bottom-0 border-t border-gray-200 flex justify-around items-center ">
      <div className="w-full flex justify-around items-center pt-2 pb-2">
        <Link to="/home">
          <div className="flex flex-col justify-center items-center">
            <CiHome size={26} />
            <p className="text-2xl">Home</p>
          </div>
        </Link>
        <Link to="/log-workout">
          <div className="flex flex-col justify-center items-center">
            <GoPlus size={26} />
            <p>Log</p>
          </div>
        </Link>
        <Link to="/progress">
          <div className="flex flex-col justify-center items-center">
            <TbProgress size={26} />
            <button onClick={() => navigate("/progress")}> Progress</button>
          </div>
        </Link>
        <Link to="/profile">
          <div className="flex flex-col justify-center items-center">
            <CiUser size={26} />
            <p>Profile</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BottomNav;
