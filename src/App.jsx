import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/login ";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Body />}>
            <Route path="/login" element = {<Login/>} />
            <Route path="/prfile" element = {<h1>Profile</h1>} />
         </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;