import React from "react";
import Login from "../component/login/login";
import { Stringsignupbutton } from '../component/stringbutton/stringbutton'
import { Backarea } from "../component/common/log-singback";

function Mainlogin() {
  return (
    <Backarea>
      <Login />
      <Stringsignupbutton />
    </Backarea>
  )
}

export default Mainlogin;