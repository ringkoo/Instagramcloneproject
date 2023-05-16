import React from "react";
import { Container, Profilephoto, Nicknamecontainer, Nickname, Divstyle } from "./styles";
import { Textbutton } from "../common/textbutton";

function Followarea({ users }) {
  return (
    <>
      <Container>
        {/* 유용한 처리법 */}
        {users.map?.((members) => {
          console.log(members)
          return (
            <Nicknamecontainer key={members.id}>
              <Divstyle>
                <Profilephoto url={members.profileImageUrl} />
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