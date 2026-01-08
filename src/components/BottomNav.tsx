import { CiHome } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { TbProgress } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

function BottomNav() {

  return (
    <div className="bg-[#927C76] w-full py-2 fixed left-0 bottom-0 border-t border-gray-200 flex justify-around items-center ">
      <div className="w-full flex justify-around items-center pt-2 pb-2">
        <Link to="/home">
          <div className="flex flex-col justify-center items-center">
            <CiHome size={26} color="#FAF4D4" />
            <p className="text-sm text-white">Home</p>
          </div>
        </Link>
        <Link to="/log-workout">
          <div className="flex flex-col justify-center items-center">
            <GoPlus size={26} color="#faf4d4" />
            <p className="text-sm text-white">Log</p>
          </div>
        </Link>
        <Link to="/progress">
          <div className="flex flex-col justify-center items-center">
            <TbProgress size={26} color="#faf4d4" />
            <p className="text-sm text-white">Progress</p>
          </div>
        </Link>
        <Link to="/profile">
          <div className="flex flex-col justify-center items-center">
            <CiUser size={26} color="#faf4d4" />
            <p className="text-sm text-white">Profile</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BottomNav;
