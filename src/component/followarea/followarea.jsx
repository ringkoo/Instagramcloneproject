import React from "react";
import { Container, Profilephoto, Nicknamecontainer, Nickname, Divstyle } from "./styles";
import { Textbutton } from "../common/textbutton";

function Followarea({ users }) {
  return (
    <>
      <Container>
        {users.map((members) => (
          <Nicknamecontainer key={members.id}>
            <Divstyle>
              <Profilephoto url={members.profileImageUrl} />
              <Nickname>{members.nickName}</Nickname>
            </Divstyle>
            <Textbutton>팔로우</Textbutton>
          </Nicknamecontainer>
        ))}
      </Container>
    </>
  )
}

export default Followarea;