import axios from "axios";
import BASE_URL from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";
import DEFAULT_IMG from "../../consts/Images";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, about, skills, photoURL } = user;
  const dispatch = useDispatch();
  const handleConnection = async (status, toUserId) => {
    try {
       const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + toUserId, {}, { withCredentials: true } );
       dispatch(removeFeed(user.toUserId))
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="card bg-base-200 w-96 shadow-sm">
      <figure className="w-full">
        <img src={photoURL ? photoURL : DEFAULT_IMG} alt="profile" className="w-full h-90 object-cover" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title text-3xl justify-center">{firstName + " " + lastName}</h2>
        <p> <em>{about}</em> </p>
        <p> <b>Skills :- </b>{skills.join(", ")} </p>
        <div className="card-actions flex justify-around">
          <button className="btn btn-error" onClick={() => handleConnection("ignore", _id)}>Ignore</button>
          <button className="btn btn-success" onClick={() => handleConnection("interested", _id)}> Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;