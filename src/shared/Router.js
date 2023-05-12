import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlogin from "../page/Login";
import Home from "../page/Home";
import Mainsignup from '../page/Signup'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Mainsignup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;