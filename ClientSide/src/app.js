import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Services from "./Components/Service";
import SignUp from "./Components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/service" element={<Services />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
