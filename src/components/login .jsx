import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
    const dispatch = useDispatch();
    const[email,setEmail] = useState("puli@gmail.com");
    const[password,setPassword] = useState("Pulii@24");
    const handleLogin = async ()=>{
         try{
           const res = await axios.post('http://localhost:3000/login',{
            email,password
          },{withCredentials:true});
        //   console.log(res.data);
          dispatch(addUser(res.data))
         }catch(err){
            console.log("Error in Login",err)
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
                <div className="card-actions flex justify-center ">
                   <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                </div>
            </div>
    </div>
    </div>
  );
}
export default Login;