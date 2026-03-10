import axios from "axios"
import BASE_URL from './../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addConnections } from '../utils/connectionSlice'
import ConnectionCard from "./ConnectionCard";

const Connections = () => {

  const connections = useSelector((store) => store.connection) || [];
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + '/user/connections', { withCredentials: true });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log("ERROR :- " + err);
    }
  }

  useEffect(() => {
    fetchConnections();
  }, []);

  if (connections.length === 0)
    return (
      <h1 className="text-center text-3xl mt-10 font-semibold">
        No Connections Found
      </h1>
    );

  return (
    <div className="p-6">

      <h1 className="text-center text-4xl font-bold mb-8">
        Connections
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {connections.map((con) => (
          <ConnectionCard key={con._id} user={con} />
        ))}
      </div>

    </div>
  )
}

export default Connections