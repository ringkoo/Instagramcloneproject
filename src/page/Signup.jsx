import React from "react";
import Signup from '../component/signup/signup'
import { StringloginButton } from '../component/stringbutton/stringbutton'
import { Backarea } from '../component/common/log-singback'

function Mainsignup() {
    return (
        <Backarea>
            <Signup />
            <StringloginButton />
        </Backarea>

    )
}

export default Mainsignup