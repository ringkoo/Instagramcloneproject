import React from "react";
import Navbar from "../component/navbar/navbar";
import { Homenavbox, Profileback, Profilecontainer, Profileimgbox, Backarea } from "../component/common/backarea";
import Profiletop from "../component/profiletop/profiletop";
import ProfileCard from "../component/profilecard/profilecard";
import Followarea from "../component/followarea/followarea";

function Profile() {
  return (
    <Backarea>
      <Homenavbox>
        <Navbar />
      </Homenavbox>
      <Profilecontainer>
        <Profileback>
          <Profiletop />
        </Profileback>
        <Profileimgbox>
          <ProfileCard imgurl='/card1.jpg' />
          <ProfileCard imgurl='/card2.jpg' />
          <ProfileCard imgurl='/card3.jpg' />
          <ProfileCard imgurl='/card1.jpg' />
          <ProfileCard imgurl='/card2.jpg' />
          <ProfileCard imgurl='/card3.jpg' />
        </Profileimgbox>
      </Profilecontainer>
      <Followarea />
    </Backarea>
  );
}

export default Profile;
