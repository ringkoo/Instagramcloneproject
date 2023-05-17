import React, { useState } from "react";
import { Container, Profilephoto, Nicknamecontainer, Nickname, Divstyle } from "./styles";
import { Textbutton } from "../common/textbutton";
import { followPost, userInquiry, unfollowPost } from "../../api/users";
import { useQuery } from "react-query";

function Followarea() {
  const { data: users, status } = useQuery('users', userInquiry)
  const [following, setFollowing] = useState({})

  if (status === 'loading') {
    return <p>불러오는중...</p>
  }

  if (status === 'error') {
    return <p>데이터를 불러올수 없습니다.</p>
  }

  const handleClick = async (nickName) => {
    try {
      let response;
      if (following[nickName]) { // if currently following, then unfollow
          response = await unfollowPost({ nickName });
      } else { // if not currently following, then follow
          response = await followPost({ nickName });
      }
      
      if (response && response.statusCode === 200) {
          setFollowing({
              ...following,
              [nickName]: response.message.includes('성공'),
          })
      }
  } catch (error) {
      console.log('팔로우/언팔로우 요청 처리 중 에러 발생:', error)
  }
}

  return (
    <>
      <Container>
        {users && users.content.map((members) => {
          return (
            <Nicknamecontainer key={members.id}>
              <Divstyle>
                <Profilephoto url={members.img} />
                <Nickname>{members.nickName}</Nickname>
              </Divstyle>
              <Textbutton
                onClick={() => handleClick(members.nickName)}>
                {following[members.nickName] ? '언팔로우' : '팔로우'}
              </Textbutton>
            </Nicknamecontainer>
          )
        }
        )}
      </Container>
    </>
  )
}

export default Followarea;