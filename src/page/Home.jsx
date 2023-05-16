import React, { useState } from "react";
import Navbar from "../component/navbar/navbar";
import Storybar from "../component/storybar/storybar";
import { Backarea, Feedbox, Homenavbox } from "../component/common/backarea";
import Feedcard from "../component/feedcard/feedcard";
import { useQuery } from "react-query";
import { getBoard } from "../api/board";
import Cookies from "js-cookie";

function Home() {
  const token = Cookies.get("token");
  // const [members, setMembers] = useState([])

  // useEffect(() => {
  //   const getMembers = async () => {
  //     const members = await userInquiry()
  //     setMembers(members)
  //   }
  //   getMembers()
  // }, [])

  if (token) {
    // console.log("home page에서 확인된 현재토큰", token);
  } else {
    console.log("home page에서 확인된 토큰 없음");
  }

  const { isLoading, isError, data } = useQuery("getBoard", getBoard)

  console.log('home', data)
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
      <Feedbox>
        <Storybar />
        {data?.map((item) => {
          return (
            <Feedcard
              key={item.id}
              postId={item.boardId}
              id={item.boardId}
              nickname={item.nickname || "서버와 연결되지 않았습니다."}
              profileimg="/Chaewon.png"
              date={item.createdAt || "서버와 연결되지 않았습니다."}
              imgurl={item.imageUrl}
              content={item.contents}
            />
          );
        })}
      </Feedbox>
    </Backarea>
  );
}

export default Home;
