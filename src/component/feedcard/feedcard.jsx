import React, { useState } from "react";
import { Contentsbox, Userinfobox, CommentHomeInput, CommentContainer, Container, Profilephoto, Topdiv, Nickname, Datetime, Imagediv, Likeimg, Middlediv, Nicknamecontainer, Commentimg } from "./styles";
import { BiComment } from "react-icons/bi";
import { Textbutton } from "../common/textbutton";
import { deleteBoard, likeBoardPost } from "../../api/board";
import ReadModal from "../modal/readmodal";
import { useMutation, useQueryClient } from "react-query";
import { commentPost } from "../../api/comments";

function Feedcard({ boardId, imgurl, nickName, memberImage, createdAt, content, comments, boardLove }) {
  const [isLike, setIsLike] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [isComment, setIsComment] = useState('')
  const queryClient = useQueryClient();



  const ModalOpenHandler = () => {
    setIsOpen(!isOpen)
  }

  const mutation = useMutation(deleteBoard, {
    onSuccess: () => {
      queryClient.invalidateQueries('boards');
    },
  });
  
  // 게시글 삭제
  function DeleteboardHandler(boardId) {
    const confirmed = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmed) {
      mutation.mutate(boardId);
    }
  }

  const CommentChangeHandler = (e) => {
    setIsComment(e.target.value)
  }

  // 댓글 작성
  const mutations = useMutation(commentPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('boards');
    },
    onError: (error) => {
      console.log(error)
    }
  });

  const CommentPostHandler = () => {
    mutations.mutate(newComment)
    alert('댓글 작성 완료')
    setIsComment('')
  }

  const newComment = {
    "contents": isComment,
    "boardId": boardId,

  }

  const likePostMutation = useMutation(likeBoardPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('boards');
    },
    onError: (error) => {
      console.log(error)
    }
  });

  const LikeHandler = (boardId) => {
    likePostMutation.mutate(boardId)
    setIsLike(!isLike)
  }

  return (
    <>
      <Container>
        {/* 상단 div */}
        <Topdiv>
          <Userinfobox>
            {/* 게시자 프로필 이미지 */}
            <Profilephoto url={memberImage}></Profilephoto>
            <Nicknamecontainer>
              {/* 게시자 닉네임 */}
              <Nickname>{nickName}</Nickname>
              {/* 게시 시간 */}
              <Datetime>작성 시간: {createdAt}</Datetime>
            </Nicknamecontainer>
          </Userinfobox>
          {/* 게시글 삭제 */}
          <Textbutton onClick={() => DeleteboardHandler(boardId)}>삭제</Textbutton>
        </Topdiv>

        {/* 올렸던 이미지 */}
        <Imagediv url={imgurl}></Imagediv>

        {/* 좋아요 댓글 icon div */}
        <Middlediv>
          <Likeimg
            boardId={boardId}
            onClick={() => LikeHandler(boardId)}
            isLike={boardLove}
            style={{ color: boardLove ? "red" : "black" }}>♡</Likeimg>
          <Commentimg >
            <BiComment onClick={ModalOpenHandler} />
          </Commentimg>
          {isOpen ? <ReadModal
            boardId={boardId}
            imageUrl={imgurl}
            nickName={nickName}
            memberImage={memberImage}
            createdAt={createdAt}
            content={content}
            comments={comments}
          /> : null}
        </Middlediv>
        <Contentsbox>{content}</Contentsbox>

        {/* 댓글입력창 div */}
        <CommentContainer>
          <CommentHomeInput
            placeholder="댓글 입력"
            onChange={CommentChangeHandler}
            value={isComment}
          ></CommentHomeInput><Textbutton onClick={CommentPostHandler}>게시</Textbutton>
        </CommentContainer>
      </Container>
    </>
  )
}

export default Feedcard;