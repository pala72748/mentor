import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Login/Signup";
import Home from "./components/Pages/Home";
import Signin from "./components/Login/Signin";
import Otp from "./components/Login/Otp";
import Course from "./components/Pages/Course";
import Profile from "./components/Pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin/>}/>
          <Route path="/verify-otp" element={<Otp/>}/>
          <Route path="/course" element={<Course/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
