import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../page/Login";
import Home from "../page/Home";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;