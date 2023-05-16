import React, { useState } from "react";
import { Overlay, ModalWrap, Contents, ImageDiv, Readinfobox, Commentlistbox, Readbox, ChangeContentsbox, Commentspan } from "./styles";
import { Textbutton } from "../common/textbutton";
import { CommentContainer, CommentHomeInput, Nickname, Nicknamecontainer } from "../feedcard/styles";
import { Userinfobox } from "../feedcard/styles";
import { Profilephoto } from "../feedcard/styles";
import { Datetime } from "../feedcard/styles";
import Cookies from "js-cookie";
import axios from "axios";
import { deleteBoard } from "../../api/board";
import { useMutation, useQueryClient } from "react-query";
import { commentPost } from "../../api/comments";

function ReadModal({ boardId, imageUrl, nickname, profileimg, date, content, comments }) {
  const [isOpen, setIsOpen] = useState(true);
  const [editButton, setEditButton] = useState(false);
  const [editContents, setEditContents] = useState(false);
  const [editBoardText, setEditBoardText] = useState(content)
  const [isComment, setIsComment] = useState('')

  const handleClose = () => {
    setIsOpen(false);
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
    await axios.put(`${process.env.REACT_APP_SERVER_URL}/boards/${boardId}`,
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

  function DeleteboardHandler(boardId) {
    const confirmed = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmed) {
      mutation.mutate(boardId);
    }
  }


  const CommentChangeHandler = (e) => {
    setIsComment(e.target.value)
  }

  const mutations = useMutation(commentPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('commentList');
    },
    onError: (error) => {
      console.log(error)
    }
  });

  const CommentPostHandler = () => {
    mutations.mutate(newComment)
    setIsComment('')
  }

  const newComment = {
    "contents": isComment,
    "boardId": boardId
  }

console.log(comments)
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
                    <Datetime>{date}</Datetime>
                  </Nicknamecontainer>
                  {editButton ? <Textbutton style={{ position: 'relative', left: '100px', top: '10px' }}
                    onClick={contentsUpdate}
                  >완료</Textbutton> :
                    <Textbutton style={{ position: 'relative', left: '100px', top: '10px' }}
                      onClick={editHandler}
                    >수정</Textbutton>
                  }
                  <Textbutton style={{ position: 'relative', left: '100px', top: '10px' }}
                    onClick={() => DeleteboardHandler(boardId)}
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
                  {/* 게시자 프로필 이미지 */}
                  <Profilephoto uri={profileimg}></Profilephoto>
                  <Nicknamecontainer>
                    {/* 게시자 닉네임 + 작성된 댓글내용*/}
                    {comments?.map((item) => (
                      <div key={item.id}>
                        <Nickname>{item.nickName}<Commentspan>{item.contents}</Commentspan></Nickname>
                        <Datetime> {item.createdAt}</Datetime>
                      </div>
                    ))}
                  </Nicknamecontainer>
                </Commentlistbox>
                <div style={{ position: 'absolute', bottom: '0%', width: '450px' }}>
                  <CommentContainer>
                    {/* 댓글 목록을 순회하며 출력 */}
                    <CommentHomeInput
                      placeholder="댓글 입력"
                      onChange={CommentChangeHandler}
                    ></CommentHomeInput><Textbutton onClick={CommentPostHandler}>게시</Textbutton>
                  </CommentContainer>
                </div>
              </Readinfobox>
              <Textbutton style={{ position: 'relative', left: '3%', color: 'white' }} onClick={handleClose} >X</Textbutton>
            </Contents>
          </ModalWrap>
        </Overlay >
        : null
      }
    </>
  );
}

export default ReadModal;
