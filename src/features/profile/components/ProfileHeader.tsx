import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

type User = {
  id: string;
  display_name: string;
  created_at: string;
};

function ProfileHeader() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // fetch data from supabase
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);

      const { data: userProfile, error: showError } = await supabase
        .from("users")
        .select("*")
        .single(); // fetch single logged-in user

      if (showError) {
        setError(showError.message);
      } else if (userProfile) {
        setUser(userProfile);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading </p>;
  if (!user) return <p>No user found</p>;

  return (
    <div>
      <div className="w-full mb-12">
        <div className="flex items-center gap-4 mb-6 ">
          <div className="w-20 h-20 rounded-full bg-[#C4B6A7]"></div>
          <div className="flex flex-col">
            <p className="font-medium text-gray-800 text-xl">
              {user.display_name}
            </p>
            <p className="font-medium text-gray-400 text-xl">
              {user.created_at}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
