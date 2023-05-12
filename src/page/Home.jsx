import React from "react";
import Navbar from "../component/navbar/navbar";
import Storybar from "../component/storybar/storybar";
import Followarea from "../component/followarea/followarea";
import { Backarea, Feedbox } from "../component/common/backarea";
import Feedcard from "../component/feedcard/feedcard";

function Home() {
  return (
    <Backarea>
      <div style={{ width: '30vh' }}>
        <Navbar />
      </div>
      <Feedbox>
        <Storybar />
        <Feedcard url='https://images.khan.co.kr/article/2023/02/04/news-p.v1.20230204.62e1076ddfe8490e96ed3d10d0116dd0.png' />
        <Feedcard url='/card1.jpg' />
        <Feedcard url='/card2.jpg' />
        <Feedcard url='https://biz.chosun.com/resizer/JMVaZDrJqRXey9MzElls8hPDXHc=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/5ESR4MD3NUGAHVGB42WMWT5WLM.jpg' />
        <Feedcard url='https://img.sbs.co.kr/newsnet/etv/upload/2022/11/14/30000803529_1280.jpg' />
      </Feedbox>
      <Followarea />
    </Backarea>
  );
}

export default Home;
