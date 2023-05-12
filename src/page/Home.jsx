import React from "react";
import Navbar from "../component/navbar/navbar";
import Storybar from "../component/storybar/storybar";
import Followarea from "../component/followarea/followarea";
import { Backarea, Feedbox } from "../component/common/backarea";
import Feedcard from "../component/feedcard/feedcard";

function Home() {
  return (
    <Backarea>
      <Navbar></Navbar>
      <Feedbox>
        <Storybar />
        <Feedcard />
      </Feedbox>
      <Followarea />
    </Backarea>
  );
}

export default Home;
