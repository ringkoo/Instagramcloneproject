import React from "react";
import Navbar from "../component/navbar/navbar";
import Storybar from "../component/storybar/storybar";
import Followarea from "../component/followarea/followarea";
import { Backarea, Feedbox, Homenavbox } from "../component/common/backarea";
import Feedcard from "../component/feedcard/feedcard";
import { useQuery } from "react-query";
import { getBoard } from "../api/board";

function Home() {
  const { isLoading, isError, data } = useQuery("getBoard", getBoard);
  if (isLoading) {
    return <div>로딩중입니다...</div>;
  }
  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  return (

    <Backarea>
      <Homenavbox>
        <Navbar />
      </Homenavbox>
      <Feedbox>
        <Storybar />
        {data.map((item) => (
          <Feedcard
            postId={item.id}
            id={item.id}
            nickname={item.nickname}
            profileimg='/Chaewon.png'
            date={item.date||'서버와 연결되지 않았습니다'}
            imgurl={item.img}
            content={item.contents}
          />
        ))}
      </Feedbox>
      <Followarea />
    </Backarea>
  );
}

export default Home;
