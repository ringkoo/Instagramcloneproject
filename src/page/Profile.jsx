import React from "react";
import Navbar from "../component/navbar/navbar";
import { Homenavbox, Profileback, Profilecontainer, Profileimgbox, Backarea } from "../component/common/backarea";
import Profiletop from "../component/profiletop/profiletop";
import ProfileCard from "../component/profilecard/profilecard";
import Followarea from "../component/followarea/followarea";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import { getBoard } from "../api/board";

function Profile() {
  const token = Cookies.get("token");


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
          {data?.map((item) => {
            return (<ProfileCard
              key={item.id}
              boardId={item.boardId}
              nickname={item.nickname || "서버와 연결되지 않았습니다."}
              profileimg="/Chaewon.png"
              date={item.createdAt || "서버와 연결되지 않았습니다."}
              imageUrl={item.imageUrl}
              content={item.contents}
              comments={item.commentList}
            />
            )
          })}
        </Profileimgbox>
      </Profilecontainer>
      <Followarea />
    </Backarea>
  );
}

export default Profile;
