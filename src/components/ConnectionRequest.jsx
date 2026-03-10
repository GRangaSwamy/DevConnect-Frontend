import axios from "axios"
import BASE_URL from "../utils/constants"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import RequestCard from "./RequestCard";
const ConnectionRequest = () => {
    const request = useSelector((store)=>store.request)
    const dispatch = useDispatch();
  const getRequests = async ()=>{
    try{
        const res = await axios.get(BASE_URL+"/user/requests/received",{withCredentials:true});
        dispatch(addRequest(res.data.data))
    }catch(err){
        console.log("ERROR :- "+err)
    }
  }
  useEffect(()=>{
    getRequests();
  },[])

  if(request.length === 0) return <h1 className="text-center h-50 items-center flex justify-center text-4xl"> No Requests Found !!!!</h1>
  return (
    <div>
        {
        request && request.map((con)=>(
          <RequestCard key = {con._id} user = {con}/>
        ))
      } 
    </div>
  )
}

export default ConnectionRequest