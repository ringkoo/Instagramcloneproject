import React, { useState } from "react";
import { Overlay, ModalWrap, Contents, ImageDiv, Readinfobox, Commentlistbox, Readbox, ChangeContentsbox, Commentspan, Commentcontainer } from "./styles";
import { Textbutton } from "../common/textbutton";
import { CommentContainer, CommentHomeInput, Likeimg, Nickname, Nicknamecontainer } from "../feedcard/styles";
import { Userinfobox } from "../feedcard/styles";
import { Profilephoto } from "../feedcard/styles";
import { Datetime } from "../feedcard/styles";
import Cookies from "js-cookie";
import axios from "axios";
import { deleteBoard } from "../../api/board";
import { useMutation, useQueryClient } from "react-query";
import { commentDelete, commentPost, likeCommentPost } from "../../api/comments";

function ReadModal({ boardId, imageUrl, nickName, profileimg, createdAt, content, comments }) {
  const [isOpen, setIsOpen] = useState(true);
  const [editButton, setEditButton] = useState(false);
  const [editContents, setEditContents] = useState(false);
  const [editBoardText, setEditBoardText] = useState(content)
  const [isComment, setIsComment] = useState('')
  const [isLike, setIsLike] = useState(false)

  const LikeHandler = (commentId) => {
    likePostMutation.mutate(commentId)
    setIsLike(!isLike)
  }

  const likePostMutation = useMutation(likeCommentPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('boards');
    },
    onError: (error) => {
      console.log(error)
    }
  });

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
    await axios.put(`http://52.78.186.160:8080/boards/${boardId}`,
      { contents: editBoardText }, { headers: { Authorization: `Bearer ${token}` } })
    alert('수정 완료')
    editHandler();
  }

  //게시글 삭제
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

  // 댓글 input 입력값 변경 handler
  const CommentChangeHandler = (e) => {
    setIsComment(e.target.value)
  }

  // 댓글 post 
  const Postmutation = useMutation(commentPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('boards');
    },
    onError: (error) => {
      console.log(error)
    }
  })

  // 댓글 작성
  const CommentPostHandler = () => {
    Postmutation.mutate(newComment)
    alert('댓글 작성 완료')
    setIsComment('')
  }

  // 댓글 post에 필요한 요소
  const newComment = {
    "contents": isComment,
    "boardId": boardId
  }

  // const { isLoading, isError, data } = useQuery(["boards", comments], getBoard)

  // 댓글 삭제
  const CommentDeleteMutation = useMutation(commentDelete, {
    onSuccess: () => {
      queryClient.invalidateQueries('boards');
    }, onError: (error) => {
      console.log(error)
    }
  })

  //댓글 삭제
  const CommentDeleteHandler = (commentId) => {
    CommentDeleteMutation.mutate(commentId)
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
                    <Nickname>{nickName}</Nickname>
                    {/* 게시 시간 */}
                    <Datetime>{createdAt}</Datetime>
                  </Nicknamecontainer>
                  {/* 게시글 수정 */}
                  {editButton ? <Textbutton style={{ position: 'relative', left: '100px', top: '10px' }}
                    onClick={contentsUpdate}
                  >완료</Textbutton> :
                    <Textbutton style={{ position: 'relative', left: '170px', top: '10px' }}
                      onClick={editHandler}
                    >수정</Textbutton>
                  }
                  {/* 게시글 삭제 */}
                  <Textbutton style={{ position: 'relative', left: '170px', top: '10px' }}
                    onClick={() => DeleteboardHandler(boardId)}
                  >삭제</Textbutton>
                </Userinfobox>
                <ChangeContentsbox>
                  {/* 게시글 수정 내용 */}
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
                  {comments?.map((item) => (
                    <Commentcontainer key={item.id} >
                      <Profilephoto url='/Chaewon.png'></Profilephoto>
                      <Nicknamecontainer>
                        {/* 게시자 닉네임 + 작성된 댓글내용*/}
                        <Nickname>{item.nickName}<Commentspan>{item.contents}</Commentspan></Nickname>
                        <Datetime> {item.createdAt}</Datetime>
                        {/* 삭제 버튼 */}
                        <Textbutton onClick={() => CommentDeleteHandler(item.commentId)}
                          style={{ fontSize: '11px' }}>댓글 삭제</Textbutton>
                      </Nicknamecontainer>
                      <Likeimg
                        commentId={item.commentId}
                        onClick={() => LikeHandler(item.commentId)}
                        isLike={isLike}
                        style={{
                          color: isLike ? "red" : "black",
                          fontSize: '20px'
                        }}>♡</Likeimg>
                    </Commentcontainer>
                  ))}
                </Commentlistbox>
                <div style={{ position: 'absolute', bottom: '0%', width: '450px' }}>
                  <CommentContainer>
                    <CommentHomeInput
                      placeholder="댓글 입력"
                      value={isComment}
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
