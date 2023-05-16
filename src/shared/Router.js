import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlogin from "../page/Login";
import Home from "../page/Home";
import Mainsignup from '../page/Signup'
import Profile from "../page/Profile";
import Profilemodify from "../page/Profilemodify";
import ReadModal from "../component/modal/readmodal";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Mainsignup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Profilemodify" element={<Profilemodify />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;