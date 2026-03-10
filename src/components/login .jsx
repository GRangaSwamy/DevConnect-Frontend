import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../utils/constants";
const Login = () => {
    const dispatch = useDispatch();
    const[email,setEmail] = useState("ranga@gmail.com");
    const[password,setPassword] = useState("Ranga@24");
    const [error,setError] = useState(null);
    const naviagate = useNavigate();
    const handleLogin = async ()=>{
         try{
           const res = await axios.post(BASE_URL+'/login',{
            email,password
          },{withCredentials:true});
          dispatch(addUser(res.data));
          naviagate('/feed');
         }catch(err){
          setError(err?.response?.data || "Something went wrong");
        }
    }
  return (
    <div className="flex justify-center mt-4">
        <div className="card card-border bg-base-300 w-96">
            <div className="card-body">
                <h2 className="card-title justify-center">Login</h2>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email ID : </legend>
                    <input type="text" value={email} className="input" placeholder="Type email here" onChange={(e)=>setEmail(e.target.value)} />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">password</legend>
                    <input type="text" value={password} className="input" placeholder="Type email here" onChange={(e)=>{
                        setPassword(e.target.value)
                    }} />
                </fieldset>
                {error && <p className="text-red-500">{error}</p>}
                <div className="card-actions flex justify-center ">
                   <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                </div>
            </div>
    </div>
    </div>
  );
}
export default Login;