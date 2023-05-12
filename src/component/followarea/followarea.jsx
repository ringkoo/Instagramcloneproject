import React from "react";
import { Container, Profilephoto, Nicknamecontainer, Nickname, Divstyle } from "./styles";
import { Textbutton } from "../common/textbutton";

function Followarea() {
  return (
    <>
      <Container>
        <Nicknamecontainer>
          <Divstyle>
            <Profilephoto url='/Kazha.png' />
            <Nickname>Kazha</Nickname>
          </Divstyle>
          <Textbutton>팔로우</Textbutton>
        </Nicknamecontainer>
        <Nicknamecontainer>
          <Divstyle>
            <Profilephoto url='/Yunjin.png' />
            <Nickname>Yujin</Nickname>
          </Divstyle>
          <Textbutton>팔로우</Textbutton>
        </Nicknamecontainer>
        <Nicknamecontainer>
          <Divstyle>
            <Profilephoto url='https://i.namu.wiki/i/3MmQKIJfpmtSGE0KdAazIzWNbYfWCk8n2UUh1jZpNTbFqKf8qc8OzMg4djK6wnAFEH3MUTmZpuVY-7K-cXJ9hZ5O5lhtdoNNYdAWPc84b6tODFTUeQGcTZWz3yj8ec7e2cEUXT1Ipfl1p0VnDttn1Q.webp' />
            <Nickname>Minji</Nickname>
          </Divstyle>
          <Textbutton>팔로우</Textbutton>
        </Nicknamecontainer>
        <Nicknamecontainer>
          <Divstyle>
            <Profilephoto url='https://i.namu.wiki/i/hzAjA5JY94qkHJONQBLYBdk1QxSiwL5mb2I51xiUY0wUEqXOX3w-OOAlWkRt6Gmo1bmOq4-YGUV2zBVZUAqUALrjdz4m2Q5BjGlIMDN5duZegBzDBBy6_lgHqVUfBrz1PyChKQY9nBFYJkVCtcPLtA.webp' />
            <Nickname>HaNy</Nickname>
          </Divstyle>
          <Textbutton>팔로우</Textbutton>
        </Nicknamecontainer>
        <Nicknamecontainer>
          <Divstyle>
            <Profilephoto url='https://i.namu.wiki/i/qkOFwoSZWzp0UvVYV_3x9Ptgnly7gbhgxtnFEePgAxz4SpD97b-xYUsq-XENEEuoF7uCexsO1GR9jH_Ll5Pjziz2i82Iu3D30hmzSjMtdN9NH-c240wlKGn8He4R3sEMqTeDrWkwy3mbJhll2ECVnA.webp' />
            <Nickname>HaeRin</Nickname>
          </Divstyle>
          <Textbutton>팔로우</Textbutton>
        </Nicknamecontainer>
      </Container>
    </>
  )
}

export default Followarea;