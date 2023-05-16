import React, { useState } from "react";
import { Container, Profilephoto, Nicknamecontainer, Nickname, Divstyle } from "./styles";
import { Textbutton } from "../common/textbutton";
import { followPost, userInquiry } from "../../api/users";
import { useQuery } from "react-query";

function Followarea() {
  const { data: users, status } = useQuery('users', userInquiry)
  const [following, setFollowing] = useState(false)

  if (status === 'loading') {
    return <p>불러오는중...</p>
  }

  if (status === 'error') {
    return <p>데이터를 불러올수 없습니다.</p>
  }

  const handleClick = async (nickName) => {
    await followPost({ nickName })
    setFollowing({
      ...following,
      [nickName]: !following[nickName],
    })
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
                {following ? '언팔로우' : '팔로우'}
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