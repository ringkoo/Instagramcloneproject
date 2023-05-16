import React from "react";
import { Container, Profilephoto, Nicknamecontainer, Nickname, Divstyle } from "./styles";
import { Textbutton } from "../common/textbutton";
import { userInquiry } from "../../api/users";
import { useQuery } from "react-query";
// import Cookies from "js-cookie";

function Followarea() {
  const { data: users, status } = useQuery('users', userInquiry)
  // const loggedId = Cookies.get('token')

  if (status === 'loading') {
    return <p>불러오는중...</p>
  }

  if (status === 'error') {
    return <p>데이터를 불러올수 없습니다.</p>
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
              <Textbutton>팔로우</Textbutton>
            </Nicknamecontainer>
          )
        }
        )}
      </Container>
    </>
  )
}

export default Followarea;