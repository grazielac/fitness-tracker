import ProfileHeader from "./ProfileHeader";
import ProfileSettings from "./ProfileSettings";
import ProfileStats from "./ProfileStats";

function ProfileView() {
  return (
    <div>
      <div>
        <h1>Profile</h1>

        <div className="mt-10">
          <ProfileHeader />
          <ProfileStats />
          <ProfileSettings />
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
