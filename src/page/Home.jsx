import React, { useState } from "react";
import Navbar from "../component/navbar/navbar";
import Storybar from "../component/storybar/storybar";
import Followarea from "../component/followarea/followarea";
import { Backarea, Feedbox, Homenavbox } from "../component/common/backarea";
import Feedcard from "../component/feedcard/feedcard";

function Home() {
  return (
    <Backarea>
      <Homenavbox>
        <Navbar />
      </Homenavbox>
      <Feedbox>
        <Storybar />
        <Feedcard nickurl='/Chaewon.png' imgurl='https://images.khan.co.kr/article/2023/02/04/news-p.v1.20230204.62e1076ddfe8490e96ed3d10d0116dd0.png' />
        <Feedcard nickurl='/Chaewon.png' imgurl='/card1.jpg' />
        <Feedcard nickurl='/Chaewon.png' imgurl='/card2.jpg' />
        <Feedcard nickurl='/Chaewon.png' imgurl='https://biz.chosun.com/resizer/JMVaZDrJqRXey9MzElls8hPDXHc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/5ESR4MD3NUGAHVGB42WMWT5WLM.jpg' />
        <Feedcard nickurl='/Chaewon.png' imgurl='https://img.sbs.co.kr/newsnet/etv/upload/2022/11/14/30000803529_1280.jpg' />
      </Feedbox>
      <Followarea />
    </Backarea>
  );
}

export default Home;
