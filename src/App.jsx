import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/login ";
import { Provider } from "react-redux";
import useAppStore from "./utils/appStore";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import ConnectionRequest from "./components/ConnectionRequest";
import SignUp from "./components/SignUp";
import Landing from "./components/Main";

function App() {
  return (
    <Provider store={useAppStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
                <Route index element={<Landing />} />
                <Route path="/signup" element = {<SignUp/>} />
                <Route path="/login" element = {<Login/>} />
                <Route path="/profile" element = {<Profile/>} />
                <Route path="/feed" element = {<Feed/>} />
                <Route path="/connections" element = {<Connections/>} />
                <Route path="/requests" element = { <ConnectionRequest/> } />
            </Route>
          </Routes>
        </BrowserRouter>
    </Provider>
  );
}

export default App;