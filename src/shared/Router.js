import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlogin from "../page/Login";
import Home from "../page/Home";
import Mainsignup from '../page/Signup'
import Profile from "../page/Profile";
import Profilemodify from "../page/Profilemodify";
import Follower from '../page/follower'
import Following from '../page/following'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Mainsignup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Profilemodify" element={<Profilemodify />} />
        <Route path="/follower" element={<Follower />} />
        <Route path="/Following" element={<Following />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;