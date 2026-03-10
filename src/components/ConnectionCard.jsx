const ConnectionCard = ({ user }) => {
  const img = "https://images.unsplash.com/photo-1772371272141-0fbd644b65c4?w=600&auto=format&fit=crop&q=60";
  const skills = ["Eating", "Sleeping", "Coding"];

  return (
    <div className=" bg-black m-5 justify-center card card-side max-w-sm bg-base-100 shadow-lg ms-5">
      <figure>
        <img
          src={user.photoURL || img}
          className="h-30 rounded-3xl ms-9"
          alt="profile" 
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title justify-center">
          {user.firstName + " " + user.lastName}
        </h2>
        <p>{user.gender +", "+user.age}</p>
        <p>{user.about}</p>
        <p>
        {(user.skills && user.skills.length > 0 ? user.skills : skills).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default ConnectionCard;