import React, { useState } from "react";
import Navbar from "../component/navbar/navbar";
import Profiletop from "../component/profiletop/profiletop";
import ProfileCard from "../component/profilecard/profilecard";
import Followarea from "../component/followarea/followarea";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import { myfeedInqury } from "../api/users";
import ReadModal from "../component/modal/readmodal";
import {
  Homenavbox,
  Profileback,
  Profilecontainer,
  Profileimgbox,
  Backarea
} from "../component/common/backarea";

function Profile() {
  const token = Cookies.get("token");
  const { isLoading, isError, data } = useQuery("myfeed", myfeedInqury, {
    variables: { nickName: Cookies.get('nickName') }
  })

  if (!token) {
    console.log('보낼 토큰 없음')
  }
  if (isLoading) {
    return <div>로딩중입니다...</div>;
  }
  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }
  const handleClick = (id) => {
    console.log(id)
  }
  return (
    <Backarea>
      <Homenavbox>
        <Navbar />
      </Homenavbox>
      <Profilecontainer>
        <Profileback>
          <Profiletop
            nickname={data?.nickName}
            img={data?.img}
            followerCnt={data?.followerCnt}
            followingCnt={data?.followingCnt}
          />
        </Profileback>
        <Profileimgbox>
          {data?.boardResponseDtoList?.map((item) => {
            return (<ProfileCard
              key={item.id}
              id={item.boardId}
              nickname={data?.nickName || "서버와 연결되지 않았습니다."}
              profileimg={data?.img}
              date={item.createdAt || "서버와 연결되지 않았습니다."}
              imageUrl={item.imageUrl}
              content={item.contents}
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
