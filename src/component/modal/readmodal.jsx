import React, { useState } from "react";
import { Overlay, ModalWrap, Contents, ImageDiv, LeftContainer, ImagePreview, ImageBox, Bodybox, Writebox, Readinfobox, Commentlistbox, Readbox } from "./styles";
import { Textbutton } from "../common/textbutton";
import { useQuery } from "react-query";
import { getBoard, getDetailBoard } from "../../api/board";
import { useNavigate } from "react-router-dom";
import { CommentContainer, CommentHomeInput, Nickname, Nicknamecontainer } from "../feedcard/styles";
import { Userinfobox } from "../feedcard/styles";
import { Profilephoto } from "../feedcard/styles";
import { Datetime } from "../feedcard/styles";
import Cookies from "js-cookie";

function ReadModal({ id }) {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);
  const [image, setImage] = useState(null);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  console.log(id)
  return (
    <>
      {isOpen ?
        <Overlay>
          <ModalWrap>
            <Contents>
              <ImageDiv style={{
                backgroundImage: `url(${id.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}></ImageDiv>
              <Readinfobox>
                <Userinfobox>
                  {/* 게시자 프로필 이미지 */}
                  <Profilephoto ></Profilephoto>
                  <Nicknamecontainer>
                    {/* 게시자 닉네임 */}
                    <Nickname>{id.nickname}</Nickname>
                    {/* 게시 시간 */}
                    <Datetime>작성 시간: {id.date || '연결실패'}</Datetime>
                  </Nicknamecontainer>
                </Userinfobox>
                <Readbox>
                  내용{id.contents || '연결실패'}
                </Readbox>
                <Commentlistbox>
                  댓글 리스트 박스
                </Commentlistbox>
                <div style={{ position: 'relative', top: '75%' }}>
                  <CommentContainer>
                    <CommentHomeInput placeholder="댓글 입력"></CommentHomeInput><Textbutton>게시</Textbutton>
                  </CommentContainer>
                </div>
              </Readinfobox>
              <Textbutton style={{ position: 'relative', left: '3%', color: 'white' }} onClick={handleClose} >X</Textbutton>
            </Contents>
          </ModalWrap>
        </Overlay>
        : null}
    </>
  );
}

export default ReadModal;
