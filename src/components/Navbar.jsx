import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import BASE_URL from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import DEFAULT_IMG from "../../consts/Images";
import Logo from "./Logo";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = async()=>{
      try{
           await axios.post(BASE_URL+'/logout',{},{withCredentials:true});
           dispatch(removeUser());
           navigate('/')
      }catch(err){
        // error logic redirect to error page
        console.log("ERROR",err)
      }
  }
  const user = useSelector(store=>store.user);
  // console.log(user);
  return(
    <div className="navbar bg-base-100 shadow-sm p-5 items-center">
      <div className="flex-1">
        <div className="flex-1 cursor-pointer" onClick={() => user? navigate("/feed") : navigate("/")}>
          <Logo />
        </div>
      </div>
      <div className="flex gap-2">
        {
          !user&& <Link className="btn btn-secondary" to='/signup'>Signup</Link>
        }
         {
          !user&& <Link className="btn btn-primary" to='/login'>Login</Link>
        }
        {user && <div className="dropdown dropdown-end flex items-center">
          <p className="px-3">Welcome , <b> {user.firstName}</b></p>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="User Photo" src={user.photoURL || DEFAULT_IMG} />
            </div>
          </div>
          <ul  tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow" >
            <li>
              <Link to = "/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/connections" >Connections</Link>
            </li>
            <li>
              <Link to="/requests" >Requests</Link>
            </li>
            <li>
              <a onClick={handleLogOut}>Logout</a>
            </li>
          </ul>
        </div>}
      </div>
    </div>
  )
}

export default Navbar;