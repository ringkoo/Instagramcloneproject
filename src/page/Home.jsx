import React from "react";
import Navbar from "../component/navbar/navbar";
import Storybar from "../component/storybar/storybar";
import { Backarea, Feedbox, Homenavbox } from "../component/common/backarea";
import Feedcard from "../component/feedcard/feedcard";
import { useQuery } from "react-query";
import { getBoard } from "../api/board";
import Cookies from "js-cookie";
import Followarea from "../component/followarea/followarea";

function Home() {
  const token = Cookies.get("token");

  if (token) {
    // console.log("home page에서 확인된 현재토큰", token);
  } else {
    console.log("home page에서 확인된 토큰 없음");
  }

  const { isLoading, isError, data } = useQuery("boards", getBoard)

  if (!token) {
    console.log('보낼 토큰 없음')
  }
  if (isLoading) {
    return <div>로딩중입니다...</div>;
  }
  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

console.log(data)

  return (
    <Backarea>
      <Homenavbox>
        <Navbar />
      </Homenavbox>
      <Feedbox>
        <Storybar />
        {data.content?.map((item) => {
          return (
            <Feedcard
              key={item.id}
              boardId={item.boardId}
              nickName={item.nickName}
              profileimg="/Chaewon.png"
              createdAt={item.createdAt}
              imgurl={item.imageUrl}
              content={item.contents}
              comments={item.commentList}
              boardLove={item.boardLove}
            />
          );
        })}
      </Feedbox>
      <Followarea />
    </Backarea>
  );
}

export default Home;
