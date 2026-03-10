import { useState } from "react";
import DEFAULT_IMG from "../../consts/Images";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
const ViewProfile = () => {
  const [showEdit, setShowEdit] = useState(false);
  const user = useSelector((store) => store.user);
  if (!user) return <h1 className="text-center mt-20">Loading...</h1>;
  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 p-6">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Profile Card */}
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-6 pt-6">
            <img src={user.photoURL || DEFAULT_IMG} alt="User Profile" className="rounded-xl object-cover h-60 w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">
              {user.firstName + " " + user.lastName}
            </h2>
            <p className="text-gray-600">{user.about}</p>
            <p className="text-sm">{user.age + ", " + user.gender}</p>
            <p className="text-sm">{user.skills.join(", ")}</p>
            <button className="btn btn-success mt-4" onClick={() => setShowEdit(true)}>
              Edit Profile
            </button>
          </div>
        </div>
        {showEdit && (
          <div className="w-96">
            <EditProfile user={user} />
          </div>
        )}

      </div>

    </div>
  );
};

export default ViewProfile;