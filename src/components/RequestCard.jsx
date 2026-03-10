import axios from "axios"
import BASE_URL from "../utils/constants"
import { useDispatch } from "react-redux"
import {removeRequest} from '../utils/requestSlice'
const RequestCard = ({user}) => {
    const dispatch = useDispatch();
    const reviewRequest = async  (status,_id)=>{
        try{
            const res = await axios.post(BASE_URL+'/request/review/'+status+"/"+_id,{},{withCredentials:true});
             dispatch(removeRequest(_id));
        }catch(err){
            console.log("ERROR :- "+err)
        }
    }
  return (
   <div className="flex justify-around bg-base-100 shadow-sm p-4 rounded-lg">
        <figure className="mr-4">
            <img
            src={user.fromUserId.photoURL}
            alt="Requester Profile Image"
            />
        </figure>
        <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold"> {user.fromUserId.firstName+" "+user.fromUserId.lastName } </h2>
            <p><em>{user.fromUserId.about}</em> </p>
            <p> {user.fromUserId.skills.join(', ')}</p>
            <div className="mt-2 flex gap-6">
            <button className="btn btn-success text-white" onClick={()=>reviewRequest("accepted",user._id)}>Accept</button>
            <button className="btn btn-error text-white"  onClick={()=>reviewRequest("rejected",user._id)}>Reject</button>
            </div>
        </div>
    </div>
  )
}

export default RequestCard