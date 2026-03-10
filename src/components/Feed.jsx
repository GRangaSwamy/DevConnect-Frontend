import axios from "axios";
import BASE_URL from "./../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const feed = useSelector(store => store.feed);
  const user = useSelector(store => store.user);
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    const getFeed = async () => {
      if (feed && feed.length > 0) return;
      try {
        const res = await axios.get(BASE_URL + "/user/feed", {
          withCredentials: true
        });

        dispatch(addFeed(res.data));

      } catch (err) {
        console.log("ERROR", err);
      }
    };
    getFeed();
  }, [user]);
  if (!feed) return <p className="text-center mt-10">Loading...</p>;
  if (feed.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <h1 className="text-4xl font-bold mb-2">{user.firstName}</h1>
        <h2 className="text-2xl font-bold mb-2">🎉 You're all caught up!</h2>
        <p className="text-gray-500">No more profiles available right now.</p>
        <p className="text-gray-500">Check back later for new connections.</p>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <UserCard user={feed[0]} />
    </div>
  );
};
export default Feed;