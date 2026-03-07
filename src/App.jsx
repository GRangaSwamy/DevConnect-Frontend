import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/login ";
import { Provider } from "react-redux";
import useAppStore from "./utils/appStore";
import Profile from "./components/Profile";
import Feed from "./components/Feed";

function App() {
  return (
    <Provider store={useAppStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
                <Route path="/login" element = {<Login/>} />
                <Route path="/profile" element = {<Profile/>} />
                <Route path="/feed" element = {<Feed/>} />
            </Route>
          </Routes>
        </BrowserRouter>
    </Provider>
  );
}

export default App;