import React, { useState } from "react";
import { Overlay, ModalWrap, Contents, ImageDiv, LeftContainer, ImagePreview, ImageBox, Bodybox, Writebox, Readinfobox, Commentlistbox, Readbox, ChangeContentsbox } from "./styles";
import { Textbutton } from "../common/textbutton";
import { CommentContainer, CommentHomeInput, Nickname, Nicknamecontainer } from "../feedcard/styles";
import { Userinfobox } from "../feedcard/styles";
import { Profilephoto } from "../feedcard/styles";
import { Datetime } from "../feedcard/styles";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { deleteBoard, getBoard } from "../../api/board";
import { useMutation, useQueryClient } from "react-query";

function ReadModal({ id, imageUrl, nickname, profileimg, date, content }) {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(true);
  const [editButton, setEditButton] = useState(false);
  const [editContents, setEditContents] = useState(false);
  const [editBoardText, setEditBoardText] = useState(content)

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const editHandler = () => {
    setEditButton(!editButton)
    setEditContents(!editContents)
  }
  //수정 contents 값
  const boardTextEditHandler = (e) => {
    setEditBoardText(e.target.value)
  }

  // 데이터 수정 api
  const contentsUpdate = async () => {
    const token = Cookies.get('token')
    const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/boards/${id}`,
      { contents: editBoardText }, { headers: { Authorization: `Bearer ${token}` } })
    alert('수정 완료')
    editHandler();
  }

  const queryClient = useQueryClient();
  const mutation = useMutation(deleteBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries('boards');
    },
  });

  function DeleteboardHandler(id) {
    const confirmed = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmed) {
      mutation.mutate(id);
    }
  }

  return (
    <>
      {isOpen ?
        <Overlay>
          <ModalWrap>
            <Contents>
              <ImageDiv style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}></ImageDiv>
              <Readinfobox>
                <Userinfobox>
                  {/* 게시자 프로필 이미지 */}
                  <Profilephoto uri={profileimg}></Profilephoto>
                  <Nicknamecontainer>
                    {/* 게시자 닉네임 */}
                    <Nickname>{nickname}</Nickname>
                    {/* 게시 시간 */}
                    <Datetime>작성 시간: {date}</Datetime>
                  </Nicknamecontainer>
                  {editButton ? <Textbutton style={{ position: 'relative', left: '100px', top: '10px' }}
                    onClick={contentsUpdate}
                  >완료</Textbutton> :
                    <Textbutton style={{ position: 'relative', left: '100px', top: '10px' }}
                      onClick={editHandler}
                    >수정</Textbutton>
                  }
                  <Textbutton style={{ position: 'relative', left: '100px', top: '10px' }}
                    onClick={() => DeleteboardHandler(id)}
                  >삭제</Textbutton>
                </Userinfobox>
                <ChangeContentsbox>
                  {
                    editContents ?
                      <CommentHomeInput onChange={boardTextEditHandler}
                        placeholder="수정 내용 입력"
                        style={{ border: "none", }}
                      ></CommentHomeInput> : <Readbox>
                        {content}
                      </Readbox>
                  }
                </ChangeContentsbox>
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
