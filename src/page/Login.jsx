import React from "react";
import Login from "../component/login/login";
import Stringbutton from '../component/stringbutton/stringbutton'
import { Backarea } from "../component/common/loginback";

function Mainlogin() {
  return (
    <Backarea>
      <Login />
      <Stringbutton />
    </Backarea>
  )
}

export default Mainlogin;